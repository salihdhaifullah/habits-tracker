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
    // dose not work, i think it uses utc date 
    // fix it
    // its behind by 2 hours 
    // new Date(0).getTime() is +2 remove it 
    const timeDifference = new Date().getTime() - new Date(0).getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return days;
  }

  static getWeekDay() {
    return this.weekDays[(new Date()).getDay()]
  }

  static isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
}
