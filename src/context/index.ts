import { reactive } from 'vue'
import { UtilsService } from '../services/utils.service';

const context = reactive({
    isTouchDevice: UtilsService.isTouchDevice(),
    touchInit() {
        const handleTouchChange = () => {
            this.isTouchDevice = UtilsService.isTouchDevice()
        }

        window.matchMedia("(pointer: coarse)").addEventListener('change', handleTouchChange);
    },
    init() {
        this.touchInit();
    }
})

export default context;