import db from ".";


interface ICreateHabitLog {
    habitId: string;
    day: number;
}


export const createHabitLog = async (args: ICreateHabitLog) => {
    const { habitId, day } = args;

    try {
        await db.withTransactionAsync(async () => {
            await db.runAsync(`INSERT INTO HabitLogs (habit_id, day) VALUES (?,?)`, [habitId, day])
        })
    } catch (error) {
        console.log(error)
    }
}


