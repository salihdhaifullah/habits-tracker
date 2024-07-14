export enum WeekDays {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday"
}

export enum Priority {
  low,
  mid,
  high
}

export enum CountType {
  bool, // 0, 1
  time, // in second like 300s for 5 minuets
  count, // number like do 100 push ups 
}


export class UtilsService {
  static weekDays: WeekDays[] = [
    WeekDays.Sunday,
    WeekDays.Monday,
    WeekDays.Tuesday,
    WeekDays.Wednesday,
    WeekDays.Thursday,
    WeekDays.Friday,
    WeekDays.Saturday
  ]

  static dayInMs = 24 * 60 * 60 * 1000;

  static getDaysSinceEpoch() {
    return Math.floor((new Date().getTime()) / this.dayInMs);
  }

  static getWeekDayByDate(date: Date) {
    return this.weekDays[date.getDay()]
  }

  static getWeekDay() {
    return this.weekDays[(new Date()).getDay()]
  }

  static isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  static TimeToMinuets(time: string): number {
    const parts = time.split(":")
    return (Number(parts[0]) * 60) + Number(parts[1])
  }
}