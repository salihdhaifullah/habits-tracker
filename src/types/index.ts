import { IHabit, IHabitLog } from "../services/db.service";

export type DailyHabit = IHabitLog & IHabit;