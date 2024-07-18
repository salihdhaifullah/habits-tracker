<template>
    <div class="flex flex-col w-fit p-4 bg-light-surfaceContainerHigh select-none gap-6 text-start rounded-lg shadow-md-elevated h-fit">
        <h1 class="text-light-onSurfaceVariant text-xl">{{ props.title || "Enter time" }}</h1>
        <div class="flex w-full justify-center items-center flex-col gap-16">
            <NumberClock />
            <Clock />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{title?: string}>()
import Clock from './Clock.vue';
import NumberClock from './NumberClock.vue';
</script>
