<script setup lang="ts">
import { ref } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue']);

const touchStartY = ref(0);
const touchCurrentY = ref(0);
const isDragging = ref(false);

const startDrag = (event: TouchEvent) => {
    touchStartY.value = event.touches[0].clientY;
    isDragging.value = true;
};

const onDrag = (event: TouchEvent) => {
    if (!isDragging.value) return;
    touchCurrentY.value = event.touches[0].clientY;
    const translateY = Math.max(0, touchCurrentY.value - touchStartY.value);
    const sheet = document.querySelector('.transform') as HTMLElement;
    sheet.style.transform = `translateY(${translateY}px)`;
};

const endDrag = () => {
    isDragging.value = false;
    const translateY = touchCurrentY.value - touchStartY.value;
    if (translateY > 100) {
        closeSheet();
    } else {
        const sheet = document.querySelector('.transform') as HTMLElement;
        sheet.style.transform = `translateY(0)`;
    }
};

const closeSheet = () => {
    emit('update:modelValue', false);
};
</script>

<template>
    <div class="fixed inset-0 z-50 flex flex-col w-full bg-surface h-screen rounded-t-3xl overflow-hidden transform transition-transform duration-300"
        :class="{ 'translate-y-full': !props.modelValue }" @touchstart="startDrag" @touchmove="onDrag"
        @touchend="endDrag">
        <div class="p-4 flex justify-between w-full">
            <button @click="closeSheet" class="text-text-secondary">
                <Icon>close</Icon>
            </button>
            <button @click="closeSheet" class="text-text-secondary">
                <Icon>horizontal_rule</Icon>
            </button>
        </div>
        <div class="p-4">
            <slot></slot>
        </div>
    </div>
</template>
