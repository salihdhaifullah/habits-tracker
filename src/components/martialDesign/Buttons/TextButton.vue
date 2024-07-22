<template>
    <button 
        v-ripple
        class="flex h-10 text-light-primary px-3 gap-2 text-center justify-center items-center hover:bg-light-primary hover:bg-opacity-[0.08] rounded-xl" 
        :class="{'pr-4': props.icon, 'text-light-onSurface opacity-40': props.disabled}">
        {{ props.label }}
        <Icon v-if="props.icon" class="text-lg">{{ props.icon }}</Icon>
    </button>
</template>

<script setup lang="ts">
import Icon from '../Icon.vue';

interface ITextButtonProps {
    label: string;
    icon?: string;
    disabled?: boolean;
}

const props = defineProps<ITextButtonProps>()
</script>
