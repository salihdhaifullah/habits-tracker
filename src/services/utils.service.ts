export enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export enum Priority {
  low,
  mid,
  high
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

  static getDaysSinceEpoch() {
    const timeDifference = new Date().getTime() - new Date(0).getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return days;
  }

  static getWeekDay() {
    return this.weekDays[(new Date()).getDay()]
  }
}
