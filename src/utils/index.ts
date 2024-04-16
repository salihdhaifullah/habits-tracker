import { FontAwesome6 } from '@expo/vector-icons';

export enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export enum Unit {
    Time,
    Count,
    Binary
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

const WeekDaysStringMap: { [key: string]: WeekDays } = {
    'Sunday': WeekDays.Sunday,
    'Monday': WeekDays.Monday,
    'Tuesday': WeekDays.Tuesday,
    'Wednesday': WeekDays.Wednesday,
    'Thursday': WeekDays.Thursday,
    'Friday': WeekDays.Friday,
    'Saturday': WeekDays.Saturday
};


export const getDaysSinceEpoch = () => {
    const timeDifference = new Date().getTime() - new Date(0).getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return days;
}

export const getWeekDay = () => {
    return weekDays[(new Date()).getDay()]
}

export const getSqlLiteDate = (date: number = Date.now()) => {
    return Math.floor(date / 1000);
}

export const ParseSqlLiteDate = (date: number) => {
    return new Date(date * 1000);
}


export type FontAwesome6Icon = React.ComponentProps<typeof FontAwesome6>['name']