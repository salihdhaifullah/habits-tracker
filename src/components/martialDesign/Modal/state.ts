import { reactive } from "vue";

const context = reactive({
    isOpen: false,
    close() {}
})

export default context;