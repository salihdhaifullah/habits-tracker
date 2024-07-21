<script setup lang="ts">
import { ref } from 'vue';
import { UtilsService } from '../services/utils.service';
import Icon from './martialDesign/Icon.vue';
import CheckBox from './martialDesign/CheckBox.vue';
import { DailyHabit } from '../types';

const props = defineProps<DailyHabit>();
const time = ref(UtilsService.TimeToMinuets(props.end) - UtilsService.TimeToMinuets(props.start))
console.log(time)

const checked = ref(false)
const toggleChecked = (val: boolean) => {
    checked.value = val;
    console.log("update DB")
}

</script>

<template>
    <div
        class="rounded-md shadow-lg flex flex-row bg-light-primaryContainer items-center gap-2 justify-between px-8 py-4">

        <div class="flex flex-row gap-4">
            <Icon class="text-5xl p-2 bg-light-primary text-light-onPrimary rounded-full w-fit h-fit">{{ props.icon }}
            </Icon>
            <div class="flex flex-col">
                <div class="flex flex-col justify-center">
                    <h1 class="text-2xl text-light-onPrimaryContainer">{{ props.title }}</h1>
                    <p class="text-base">start from {{ props.start }} to {{ props.end }}</p>
                    <p class="text-base text-light-onPrimaryContainer">points: {{ props.points }}</p>
                </div>
            </div>
        </div>


        <div>
            <CheckBox :checked="checked" class="w-8 h-8" :onchange="toggleChecked" />
        </div>
    </div>
</template>
