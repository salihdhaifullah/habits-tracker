<script setup lang="ts">
import HabitView from './HabitView.vue';
import context from '../context';
</script>


<template>
    <div class="flex w-full flex-col justify-center items-center">
        <div
            class="flex flex-col p-6 w-[80%] min-h-screen">
            <HabitView v-for="(ele, index) in context.todayHabitLogs" :key="index" v-bind="ele" />
        </div>
    </div>
</template>