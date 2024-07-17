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
    hoursOptions: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    minutesOptions: ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"],
    
    setType(n: Type) {
        this.type = n;
    },

    setHours(n: number) {
        this.hours = n;
    },

    setMinutes(n: number) {
        this.minutes = n;
    },

    setPeriod(n: Periods) {
        this.period = n;
    }
})

export default context;