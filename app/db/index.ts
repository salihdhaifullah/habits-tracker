import { FontAwesome } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import { ulid } from "ulid";
import { getSqlLiteDate } from "../utils";

const db = SQLite.openDatabase("db.db");

export enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export const weekDays: WeekDays[] = [
    WeekDays.Sunday,
    WeekDays.Monday,
    WeekDays.Tuesday,
    WeekDays.Wednesday,
    WeekDays.Thursday,
    WeekDays.Friday,
    WeekDays.Saturday
]


const DBModel = `--sql
    CREATE TABLE IF NOT EXISTS WeekDays (
        day TEXT PRIMARY KEY NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Habits (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        icon TEXT NOT NULL,
        order INTEGER NOT NULL,
        points INTEGER NOT NULL,
        createdAt INTEGER NOT NULL,
        description TEXT
    );

    CREATE TABLE IF NOT EXISTS HabitWeekDays (
        habit_id TEXT NOT NULL,
        week_day TEXT NOT NULL,
        PRIMARY KEY (habit_id, week_day),
        FOREIGN KEY (habit_id) REFERENCES Habits(id),
        FOREIGN KEY (week_day) REFERENCES WeekDays(day)
    );

    CREATE TABLE IF NOT EXISTS Today (
        day INTEGER NOT NULL,
        habit_id TEXT NOT NULL,
        completed INTEGER NOT NULL,
        PRIMARY KEY (habit_id, day),
        FOREIGN KEY (habit_id) REFERENCES Habits(id)
    );

    -- to complete
    CREATE TABLE IF NOT EXISTS Journals (
        day INTEGER PRIMARY KEY NOT NULL,
        content TEXT NOT NULL,
    );

    CREATE TABLE IF NOT EXISTS Reminders (
        id TEXT PRIMARY KEY NOT NULL,
        date INTEGER NOT NULL,
    );

`

export class Habit {
    name: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
    order: number;
    points: number;
    days: WeekDays[];
    description: string | null;

    constructor (name: string, icon: React.ComponentProps<typeof FontAwesome>['name'], order: number, points: number, days: WeekDays[], description: string | null) {
        this.name = name
        this.icon = icon
        this.order = order
        this.points = points
        this.days = days
        this.description = description
    }

    public create(tx: SQLite.SQLTransaction) {
        const habitId = ulid()

        tx.executeSql(`--sql
            INSERT INTO Habits (id, name, icon, order, points, createdAt, description) VALUES (?,?,?,?,?,?,?)
        `, [habitId, this.name, this.icon, this.order, this.points, getSqlLiteDate(), this.description])


        for (const weekDay of this.days) {
            tx.executeSql(`--sql 
                INSERT INTO HabitWeekDays (habit_id, week_day) VALUES (?,?)
            `, [habitId, weekDay])
        }
    }
}



const initWeekDays = (tx: SQLite.SQLTransaction) => {
    for (const day of weekDays) {
        tx.executeSql(`--sql  
            INSERT INTO WeekDays (day) 
            SELECT ? WHERE NOT EXISTS(SELECT 1 FROM WeekDays WHERE day = ?)
        `, [day, day])
    }
}


db.transaction((tx) => {
    tx.executeSql(DBModel),
    (err: SQLite.SQLError) => {
        console.error(err)
    },
    initWeekDays(tx)
})

export default db

// table reminder
// table habit
// table today
// table daily journal