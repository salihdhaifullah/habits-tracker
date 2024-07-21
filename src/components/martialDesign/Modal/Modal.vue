<script lang="ts" setup>
import { createApp, createBlock } from 'vue';
import Content from './Content.vue';
import context from './state';

const props = defineProps<{ isOpen: boolean, handleClose: () => void }>()

context.close  = props.handleClose;
context.isOpen = props.isOpen;

createBlock(Content, props
createApp(Content).mount('#modal');
</script>