import { ulid } from "ulid";
import { WeekDays, getDaysSinceEpoch, getSqlLiteDate, getWeekDay } from "../utils";
import db from ".";
import { createHabitLog } from "./habit-log";



interface ICreateHabit {
    title: string;
    startTime: string;
    endTime: string;
    points: number;
    repeat: WeekDays[];
    icon?: string;
    description?: string;
}


export const createHabit = async (args: ICreateHabit) => {
    const { title, startTime, endTime, points, repeat, icon, description } = args

    const id = ulid()
    const createdAt = getSqlLiteDate()
    const lastCheck = getDaysSinceEpoch()

    try {
        await db.withTransactionAsync(async () => {
            await db.runAsync(`INSERT INTO Habits (id, title, start, end, point, createdAt, icon, description, last_check) VALUES (?,?,?,?,?,?,?,?,?)`,
                [id, title, startTime, endTime, points, createdAt, icon, description, lastCheck])

            for (const weekDay of repeat) {
                await db.runAsync(`INSERT INTO HabitWeekDays (habit_id, week_day) VALUES (?,?)`, [id, weekDay])
            }

            await createHabitLog({ day: lastCheck, habitId: id });
        })

    } catch (error) {
        console.log(error)
    }
}

export const getHabitsWherelastCheckNotEquleToToday = async () => {
    const today = getDaysSinceEpoch();
    await db.withTransactionAsync(async () => {
        const data = await db.getAllAsync(`SELECT h.id FROM Habits h
                            JOIN HabitWeekDays hwd ON h.id = hwd.habit_id
                            WHERE h.last_check != ?
                            AND hwd.week_day = ?;`, [today, getWeekDay()])

        console.log(data)
    })

}

