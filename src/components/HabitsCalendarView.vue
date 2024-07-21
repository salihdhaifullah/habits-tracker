<script setup lang="ts">
import { onMounted, ref } from 'vue';
import context from '../context';
import { DailyHabit } from '../types';

const data_mins = ref<string[]>()

onMounted(() => {
    const dump = [];
    for (let i = 1; i <= 24; i++) {
        dump.push((i < 10 ? ("0" + i.toString()) : i.toString()) + ":" + "00")
    }

    data_mins.value = dump;
})


function getTop(ele: DailyHabit) {
    return ((Number(ele.start.split(":")[0]) * 100) + "px")
}

function getHight(ele: DailyHabit) {
    return ((Number(ele.start.split(":")[0]) * 100) + "px")
}
</script>


<template>
    <div class="flex w-full flex-col justify-center items-center">
        <div
            class="bg-light-tertiaryContainer flex h-[2464px] rounded-lg flex-col p-6 sm:w-[500px] w-96 shadow-xl-elevated relative">
            <div v-for="(num, index) in data_mins" :key="index"
                class="h-[100px] w-full text-light-inverseSurface text-start flex flex-row justify-center items-center gap-1 z-1">
                <span>{{ num }}</span>
                <span class="bg-light-onTertiaryContainer h-px w-full flex"></span>
            </div>
            <div v-for="(ele, index) in context.todayHabitLogs" :key="index"
                class="w-[calc(100%-92px)] text-light-inverseSurface bg-light-primaryContainer flex flex-col absolute right-[24px] p-2 shadow-md-elevated rounded-md"
                :style="{ top: getTop(ele), height: getHight(ele) }">
                <span>{{ ele.title }}</span>
            </div>
        </div>
    </div>
</template>