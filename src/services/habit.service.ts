import { Injectable } from '@angular/core';
import { ulid } from "ulid";
import { Priority, UtilsService, WeekDays } from "../services/utils.service";
import { DbService, IHabit } from "../services/db.service";
import { UpdateSpec } from 'dexie';

export interface ICreateHabit {
  title: string;
  start: string;
  end: string;
  points: number;
  repeat: WeekDays[];
  icon: string;
  description: string;
}

export interface ICreateHabitLog {
  habitId: string;
  day: number;
}


export interface ICreateTask {
  title: string;
  habitId?: string;
  day?: number;
  priority: Priority;
  description?: string;
}



@Injectable({ providedIn: 'root' })
export class HabitService {
  constructor(private db: DbService) { }

  public async CreateHabit(args: ICreateHabit) {
    const id = ulid()
    const createdAt = new Date()
    const lastCheck = UtilsService.getDaysSinceEpoch()


    try {
      await this.db.transaction('rw', this.db.habits, this.db.habitLogs, async () => {
        await this.db.habits.add({ ...args, id, createdAt, lastCheck })
        await this.db.habitLogs.add({ day: lastCheck, habitId: id });
      });
    } catch (error) {
      console.log(error)
    }
  }

  public async CreateHabitLog(args: ICreateHabitLog) {
    try {
      await this.db.habitLogs.add(args)
    } catch (error) {
      console.log(error)
    }
  }

  public async GetHabitsWhereLastCheckNotEquleToToday() {
    const today = UtilsService.getDaysSinceEpoch();
    const todayWeekDay = UtilsService.getWeekDay();
    const data = await this.db.habits.filter(h => h.lastCheck !== today && h.repeat.includes(todayWeekDay)).toArray();
    const toUpdate: { key: string, changes: UpdateSpec<IHabit> }[] = [];
    for (let i = 0; i < data.length; i++) {
      toUpdate.push({ key: data[i].id, changes: { lastCheck: today } })
    }

    await this.db.habits.bulkUpdate(toUpdate)

    return data
  }

  public async CreateTask(args: ICreateTask) {
    try {
      const id = ulid()
      await this.db.tasks.add({ ...args, id })

    } catch (error) {
      console.log(error)
    }
  }

  public async InitHabitLogs() {
    const data = await this.GetHabitsWhereLastCheckNotEquleToToday();
    const today = UtilsService.getDaysSinceEpoch();
    const toCreate: ICreateHabitLog[] = []
    for (let i = 0; i < data.length; i++) {
      toCreate.push({ day: today, habitId: data[i].id })
    }
    await this.db.habitLogs.bulkAdd(toCreate);
  }
}
