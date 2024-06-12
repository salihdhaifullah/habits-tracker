// const drop = `
// DROP TABLE WeekDays;
// DROP TABLE Habits;
// DROP TABLE HabitWeekDays;
// DROP TABLE HabitLogs;
// DROP TABLE Task;
// `

export const DBModel = `
CREATE TABLE IF NOT EXISTS WeekDays (
    day TEXT PRIMARY KEY NOT NULL -- the 7 week days 
);

CREATE TABLE IF NOT EXISTS Habits (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    start TEXT NOT NULL,
    end TEXT NOT NULL,
    points INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    last_check INTEGER NOT NULL DEFAULT 0, 
    icon TEXT,
    description TEXT
);

-- many to many relationship between weekDays and habits
CREATE TABLE IF NOT EXISTS HabitWeekDays (
    habit_id TEXT NOT NULL,
    week_day TEXT NOT NULL,
    PRIMARY KEY (habit_id, week_day),
    FOREIGN KEY (habit_id) REFERENCES Habits(id),
    FOREIGN KEY (week_day) REFERENCES WeekDays(day)
);




CREATE TABLE IF NOT EXISTS HabitLogs (
    habit_id INTEGER NOT NULL,
    day INTEGER NOT NULL,
    done INTEGER,
    PRIMARY KEY (habit_id, day),
    FOREIGN KEY (habit_id) REFERENCES Habits(id)
);


CREATE TABLE IF NOT EXISTS Tasks ( 
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    priority INTEGER NOT NULL DEFAULT 1,
    habit_id INTEGER,
    day INTEGER,
    done INTEGER,
    description TEXT, 
    FOREIGN KEY (habit_id, day) REFERENCES HabitLogs(habit_id, day)
);
`;

