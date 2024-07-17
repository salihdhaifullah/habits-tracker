<script setup lang="ts">
const props = defineProps<{ checked: boolean, class?: string, label?: string, onchange: (val: boolean) => void }>();
</script>

<template>
    <label class="flex items-center cursor-pointer">
        <input type="checkbox" :checked="props.checked"
            @change="(e) => props.onchange((e.target as HTMLInputElement).checked)" class="hidden" />
        <div class="w-6 h-6 border-2 border-light-outline rounded-md flex items-center justify-center 
        transition-colors duration-200 ease-in-out 
         focus:ring-2 focus:ring-light-primary focus:outline-none" :class="[
            props.checked ? 'bg-light-primary' : 'bg-light-surface',
            props.class
        ]">
            <svg v-if="props.checked" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-light-onPrimary"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <span class="ml-2 text-light-onSurface">{{ props.label }}</span>
    </label>
</template>

<style scoped>
input:focus+div {
    box-shadow: 0 0 0 2px rgba(144, 74, 66, 0.6);
}
</style>