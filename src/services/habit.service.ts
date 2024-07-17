import { ulid } from "ulid";
import { CountType, Priority, UtilsService, WeekDays } from "../services/utils.service";
import DB, { IHabit } from "../services/db.service";
import { UpdateSpec } from 'dexie';

export interface ICreateHabit {
  title: string;
  start: string;
  end: string;
  points: number;
  repeat: WeekDays[];
  icon: string;
}

export interface ICreateHabitLog {
  habitId: string;
  day: number;
}


export interface ICreateTask {
  title: string;
  repeat: WeekDays[];
  priority: Priority;
  count: number | null;
  countType: CountType;
  icon: string;
  isMin: boolean; // is the count going to the limit or above good, good = true, bad = false  
  habitId?: string;
  day?: number;
  description?: string;
}

export async function CreateHabit(args: ICreateHabit) {
  const id = ulid()
  const createdAt = new Date()
  const lastCheck = UtilsService.getDaysSinceEpoch()-1;

  try {
    await DB.habits.add({ ...args, id, createdAt, lastCheck });
    await InitHabitLogs()
  } catch (error) {
    console.log(error)
  }
}

export async function CreateHabitLog(args: ICreateHabitLog) {
  try {
    await DB.habitLogs.add(args)
  } catch (error) {
    console.log(error)
  }
}

export async function GetHabitsWhereLastCheckNotEqualToToday() {
  const today = UtilsService.getDaysSinceEpoch();
  const data = await DB.habits.filter(h => h.lastCheck !== today).toArray();
  const toUpdate: { key: string, changes: UpdateSpec<IHabit> }[] = [];
  
  for (let i = 0; i < data.length; i++) {
    toUpdate.push({ key: data[i].id, changes: { lastCheck: today } })
  }

  await DB.habits.bulkUpdate(toUpdate)

  return data
}

export async function CreateTask(args: ICreateTask) {
  try {
    const id = ulid()
    await DB.tasks.add({ ...args, id })

  } catch (error) {
    console.log(error)
  }
}

export async function InitHabitLogs() {
  const data = await GetHabitsWhereLastCheckNotEqualToToday();
  const today = UtilsService.getDaysSinceEpoch();
  const toCreate: ICreateHabitLog[] = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    for (let j = item.lastCheck+1; j <= today; j++) {
      const currentWeekDay = UtilsService.getWeekDayByDate(new Date(UtilsService.dayInMs*j));
      if (item.repeat.includes(currentWeekDay)) toCreate.push({ day: j, habitId: item.id });
    }
  }

  await DB.habitLogs.bulkAdd(toCreate);
}


function merge<T1, T2>(x: T1[], y: T2[]): (T1&T2)[] {
  const data: (T1&T2)[] = []

  for (let i = 0; i < x.length; i++) {
    data.push({...x[i], ...y[i]})
  }
  
  return data;
}

export async function getTodayHabits() {
  const today = UtilsService.getDaysSinceEpoch();
  const data = await DB.habitLogs.filter(h => h.day === today).toArray()
  const data2 = await DB.habits.bulkGet(data.map(x => x.habitId))

  return merge(data, data2);
}