import { reactive } from 'vue'

export enum Periods {
    AM = "AM",
    PM = "PM"
}

export enum Type {
    hours,
    minutes
}

const context = reactive({
    hours: 12,
    minutes: 0,
    period: Periods.PM,
    type: Type.hours,
    isClock: true,
    hoursOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    minutesOptions: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45,  50, 55],
    isOpen: false,
    
    setType(n: Type) {
        this.type = n;
    },

    setIsClock(n: boolean) {
        this.isClock = n;
    },

    setHours(n: number) {
        this.hours = n;
    },

    setMinutes(n: number) {
        this.minutes = n;
    },

    setPeriod(n: Periods) {
        this.period = n;
    },
})

export default context;