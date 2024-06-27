import { Priority, WeekDays } from "../utils";

export interface IHabit {
    title: string;
    startTime: string; // e.g "12:30pm"
    endTime: string; // e.g "01:00pm"
    id: string; // use ulid
    repeat: WeekDays[];
    logs: IHabitLog[];
    tasks: ITask[];
    icon?: string; // the name of the icon 
    createdAt: number;
    last_check: number;
    points: number;
    description?: string;
};

export interface IHabitLog {
    habitId: string;
    day: number;
    done?: boolean; // if undefined then its idle if false mean its a failure if true mean its success
    habit: IHabit; 
    subTasks: ITask[];
}

export interface ITask {
    title: string;
    habitId?: string; // it can be attached to a habit log  or just independent task
    day?: number;
    habit?: IHabit;
    habitLog?: IHabitLog; 
    done?: boolean;  // if undefined then its idle if false mean its a failure if true mean its success
    priority: Priority;
    description?: string;
    id: string; // ulid 
}

