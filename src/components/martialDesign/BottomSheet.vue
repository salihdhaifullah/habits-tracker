<script setup lang="ts">
import { Ref, ref } from 'vue';
import Icon from './Icon.vue';
import context from '../../context';

const props = defineProps<{isOpen: boolean, closeSheet: () => void}>();

const touchStartY = ref(0);
const touchCurrentY = ref(0);
const isDragging = ref(false);
const bottomSheetContainer: Ref<HTMLDivElement | null> = ref(null);

const startDrag = (event: TouchEvent) => {
    touchStartY.value = event.touches[0].clientY;
    isDragging.value = true;
};

const onDrag = (event: TouchEvent) => {
    if (!isDragging.value) return;
    touchCurrentY.value = event.touches[0].clientY;
    const translateY = Math.max(0, touchCurrentY.value - touchStartY.value);
    bottomSheetContainer.value!.style.transform = `translateY(${translateY}px)`;
};

const endDrag = () => {
    isDragging.value = false;
    const translateY = touchCurrentY.value - touchStartY.value;
    if (translateY > 100) {
        props.closeSheet();
        bottomSheetContainer.value!.style.transform = ``;
    } else {
        bottomSheetContainer.value!.style.transform = `translateY(0)`;
    }
};

</script>

<template>
    <div ref="bottomSheetContainer"
        class="fixed inset-0 top-[20vh] z-50 flex flex-col w-full bg-light-surfaceVariant h-[80vh] rounded-t-3xl overflow-y-auto transform shadow-lg-elevated"
        :class="{ 'transition-transform duration-300': !isDragging, 'translate-y-full': !props.isOpen }">
        <div class="p-4 flex flex-row items-center w-full"
            :class="{ 'justify-center': context.isTouchDevice, 'justify-end': !context.isTouchDevice }" 
            @touchend="endDrag" @touchstart="startDrag" @touchmove="onDrag">
            <div v-if="context.isTouchDevice" class="text-light-onSurfaceVariant cursor-grab">
                <Icon class="text-4xl">horizontal_rule</Icon>
            </div>

            <button v-if="!context.isTouchDevice" @click="props.closeSheet" class="text-light-onSurfaceVariant">
                <Icon class="text-4xl">close</Icon>
            </button>
        </div>
        <div class="p-4">
            <slot></slot>
        </div>
    </div>

    <div @click="props.closeSheet" class="fixed inset-0 w-full h-screen bg-light-scrim bg-opacity-50 z-10 transform transition-transform duration-300"
        :class="{ 'translate-y-full': !props.isOpen }"></div>
</template>
