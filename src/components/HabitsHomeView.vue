<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getTodayHabits } from '../services/habit.service';
import { HabitType } from './HabitsCalendarView.vue';
import HabitView from './HabitView.vue';

const data = ref<HabitType[]>()
onMounted(async () => { data.value = await getTodayHabits() })
</script>


<template>
    <div class="flex w-full flex-col justify-center items-center">
        <div
            class="bg-light-tertiaryContainer flex rounded-lg flex-col p-6 w-[80%] min-h-screen shadow-xl-elevated relative">
            <HabitView v-for="(ele, index) in data" :key="index" v-bind="ele" />
        </div>
    </div>
</template>