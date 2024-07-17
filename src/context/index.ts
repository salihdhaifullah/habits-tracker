import { reactive } from 'vue'
import { UtilsService } from '../services/utils.service';
import { InitHabitLogs } from '../services/habit.service';

const context = reactive({
    isTouchDevice: UtilsService.isTouchDevice(),
    touchInit() {
        const handleTouchChange = () => {
            this.isTouchDevice = UtilsService.isTouchDevice()
        }

        window.matchMedia("(pointer: coarse)").addEventListener('change', handleTouchChange);
    },
    init() {
        InitHabitLogs()
        this.touchInit();
    }
})

export default context;