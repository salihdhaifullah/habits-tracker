import { reactive } from 'vue'
import { UtilsService } from '../services/utils.service';
import { InitHabitLogs, getTodayHabits } from '../services/habit.service';
import { DailyHabit } from '../types';

const context = reactive({
    isTouchDevice: UtilsService.isTouchDevice(),
    isLoading: true,
    todayHabitLogs: [] as DailyHabit[],

    touchInit() {
        const handleTouchChange = () => {
            this.isTouchDevice = UtilsService.isTouchDevice()
        }

        window.matchMedia("(pointer: coarse)").addEventListener('change', handleTouchChange);
    },
    async loadData() {
        await InitHabitLogs();
        this.todayHabitLogs = await getTodayHabits();
    },
    async init() {
        this.touchInit();
        await this.loadData();
        this.isLoading = false
    }
})

export default context;