import { weekDays } from "../utils";
import { DBModel } from "./sql";

const db = {} as any;

// just mark it in the habit for example habit.last-check
// and get all the habits that dose not have the same last-check as today
// default last-check = 0
// do the check on every open 
// and on creating new habit check if you can create the habit log with it given the week repeat 

const initHabitLogs = async () => {
    return;
    // const day = getDaysSinceEpoch()
    // await db.runAsync(``)
}


const initWeekDays = async () => {
    for (const day of weekDays) {
        await db.runAsync(`INSERT INTO WeekDays (day) SELECT ? WHERE NOT EXISTS(SELECT 1 FROM WeekDays WHERE day = ?)`, [day, day])
    }
}

try {
    db.withTransactionAsync(async () => {
        db.execAsync(DBModel)
        initWeekDays()
        initHabitLogs()
    })
} catch (error) {
    console.log(error)
}

export default db;
