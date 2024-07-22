<script lang="ts" setup>
import { Teleport } from 'vue';
const props = defineProps<{ isOpen: boolean, handleClose: () => void }>()
</script>

<template>
    <Teleport to="body">
    <div class="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col h-fit w-fit transition-transform duration-300"
        :class="{ '-translate-y-full top-0': !props.isOpen }">
        <slot v-if="props.isOpen"></slot>
    </div>

    <div @click="props.handleClose"
        class="fixed inset-0 w-full h-screen bg-light-scrim bg-opacity-50 z-10 transform transition-transform duration-300"
        :class="{ '-translate-y-full': !props.isOpen }">
    </div>
    </Teleport>
</template>