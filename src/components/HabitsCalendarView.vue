<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getTodayHabits } from '../services/habit.service';
import { IHabit, IHabitLog } from '../services/db.service';

export type HabitType = IHabit & IHabitLog

const data = ref<HabitType[]>([])
const data_mins = ref<string[]>()

onMounted(async () => {
    data.value = await getTodayHabits()
    console.log(data.value)

    const dump = [];
    for (let i = 1; i <= 24; i++) {
        dump.push((i < 10 ? ("0" + i.toString()) : i.toString()) + ":" + "00")
    }

    data_mins.value = dump;
})


function getTop(ele: IHabitLog & IHabit) {
    return ((Number(ele.start.split(":")[0]) * 100) + "px")
}

function getHight(ele: IHabitLog & IHabit) {

    return ((Number(ele.start.split(":")[0]) * 100) + "px")
}

// const FIVE_MINUETS_HIGHT_MIN = 20;
// const TOTAL_HIGHT = 5760;
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
            <div v-for="(ele, index) in data" :key="index"
                class="w-[calc(100%-92px)] text-light-inverseSurface bg-light-primaryContainer flex flex-col absolute right-[24px] p-2 shadow-md-elevated rounded-md"
                :style="{ top: getTop(ele), height: getHight(ele) }">
                <span>{{ ele.title }}</span>
            </div>
        </div>
    </div>
</template>