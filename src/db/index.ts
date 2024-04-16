import * as SQLite from "expo-sqlite";
import { FontAwesome6Icon, Unit, WeekDays, getSqlLiteDate, getWeekDay, weekDays } from "../utils";

const db = SQLite.openDatabase("db.db");

const DBModel = `
CREATE TABLE IF NOT EXISTS WeekDays (
    day TEXT PRIMARY KEY NOT NULL -- the 7 week days 
);

CREATE TABLE IF NOT EXISTS Habits (
    id INTEGER PRIMARY KEY NOT NULL,
    order INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    icon TEXT NOT NULL,
    unit TEXT NOT NULL, -- time, count, or yes & no
    amount INTEGER NOT NULL, -- the minimum amount in (time, count, binary) if good habit and the maximum if bad habit
    points INTEGER NOT NULL,
    createdAt INTEGER NOT NULL,
    description TEXT
);

CREATE INDEX IF NOT EXISTS idx_order ON Habits(order);

CREATE TABLE IF NOT EXISTS HabitWeekDays (
    habit_id INTEGER NOT NULL,
    week_day TEXT NOT NULL,
    PRIMARY KEY (habit_id, week_day),
    FOREIGN KEY (habit_id) REFERENCES Habits(id),
    FOREIGN KEY (week_day) REFERENCES WeekDays(day)
);

CREATE TABLE IF NOT EXISTS HabitDays (
    habit_id INTEGER NOT NULL,
    week_day TEXT NOT NULL,
    day INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    PRIMARY KEY (habit_id, day),
    FOREIGN KEY (habit_id, week_day) REFERENCES HabitWeekDays(habit_id, week_day),
    FOREIGN KEY (week_day) REFERENCES WeekDays(day),
    FOREIGN KEY (habit_id) REFERENCES Habits(id)
);
`;



export class Habit {
    name: string;
    icon: FontAwesome6Icon;
    points: number;
    days: WeekDays[];
    description: string | null;
    unit: Unit;
    amount: number;

    constructor(name: string, icon: FontAwesome6Icon, points: number, days: WeekDays[], unit: Unit, amount: number, description: string | null) {
        this.name = name
        this.icon = icon
        this.points = points
        this.days = days
        this.description = description
        this.unit = unit
        this.amount = amount
    }

    public create(tx: SQLite.SQLTransaction) {
        let habitId: number;
        let maxOrder = 0;

        tx.executeSql(`SELECT MAX(order) FROM Habits`, [], (_, res) => {
            const item = res.rows.item(0)
            if (item !== null) maxOrder = item
        })

        tx.executeSql(
            `INSERT INTO Habits (name, icon, order, points, createdAt, description, unit, amount) VALUES (?,?,?,?, ?,?,?,?)`,
            [this.name, this.icon, maxOrder + 1, this.points, getSqlLiteDate(), this.description, this.unit, this.amount],
            (_, res) => { habitId = res.insertId }
        )

        for (const weekDay of this.days) {
            tx.executeSql(
                ` INSERT INTO HabitWeekDays (habit_id, week_day) VALUES (?,?)`,
                [habitId, weekDay]
            )
        }
    }
}

const initTodayHabits = (tx: SQLite.SQLTransaction) => {
    const weekDay = getWeekDay()
    const rows = [];

    tx.executeSql(`
            SELECT HabitDays.habit_id, HabitDays.week_day, HabitDays.day, HabitDays.amount
            FROM HabitDays
            INNER JOIN HabitWeekDays ON HabitDays.habit_id = HabitWeekDays.habit_id
            AND HabitDays.week_day = HabitWeekDays.week_day
            WHERE HabitWeekDays.week_day = ?
        `,
        [weekDay],
        (_, res) => {
            res.rows
        }
    )


    // get all HabitWeekDays where week day equal to today week day
    // check on by one if we created the habit day
    // if not then create them
} 

const initWeekDays = (tx: SQLite.SQLTransaction) => {
    for (const day of weekDays) {
        tx.executeSql(`  
            INSERT INTO WeekDays (day) 
            SELECT ? WHERE NOT EXISTS(SELECT 1 FROM WeekDays WHERE day = ?)`,
            [day, day]
        )
    }
}


db.transaction((tx) => {
    tx.executeSql(DBModel),
        (err: SQLite.SQLError) => {
            console.error(err)
        },
        initWeekDays(tx)
})

export default db;