import { ulid } from "ulid";
import db from ".";
import { Priority } from "../utils";


interface ICreateTask {
    title: string;
    habitId?: string; // it can be attached to a habit log  or just independent task
    day?: number;
    priority: Priority;
    description?: string;
}


export const createTask = async (args: ICreateTask) => {
    const { habitId, day, title, priority, description } = args;
    const id = ulid()

    try {
        await db.withTransactionAsync(async () => {
            await db.runAsync(`INSERT INTO Tasks (habit_id, day, title, priority, description, id) VALUES (?,?,?,?,?,?)`, [habitId, day, title, priority, description, id])
        })

    } catch (error) {
        console.log(error)
    }
}


