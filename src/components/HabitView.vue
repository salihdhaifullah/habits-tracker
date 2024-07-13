<script setup lang="ts">
import { HabitType } from './HabitsCalendarView.vue';
import Icon from './Icon.vue';

const props = defineProps<HabitType>();
</script>

<template>
    <div class="rounded-md shadow-lg flex flex-col bg-light-primaryContainer">
        <h1 class="text-xl text-light-onPrimaryContainer">{{ props.title }}</h1>
        <Icon class="text-5xl p-2 text-light-onPrimaryContainer bg-light-tertiary rounded-full">{{ props.icon }}</Icon>
        <p class="text-base">points: {{ props.points }}</p>
        <p class="text-base">start from {{ props.start }}</p>
        <p class="text-base">time: 5 minuets</p>
    </div>
</template>