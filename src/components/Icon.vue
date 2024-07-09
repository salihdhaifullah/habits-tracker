<script setup lang="ts">
import { computed } from 'vue';
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

const props = defineProps<{ size?: Size }>()
const sizeClass = computed(() => {
    switch (props.size) {
        case 'xs':
            return 'text-xs';
        case 'sm':
            return 'text-sm';
        case 'md':
            return 'text-md';
        case 'lg':
            return 'text-lg';
        case 'xl':
            return 'text-xl';
        case '2xl':
            return 'text-2xl';
        case '3xl':
            return 'text-3xl';
        case '4xl':
            return 'text-4xl';
        case '5xl':
            return 'text-5xl';
        case '6xl':
            return 'text-6xl';
        default:
            return 'text-md';
    }
});
</script>

<template>
    <span class="material-symbols-outlined" :class="sizeClass">
        <slot></slot>
    </span>
</template>


<style scoped>
span {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
</style>