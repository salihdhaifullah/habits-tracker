<template>
    <div class="flex flex-row gap-4 justify-center items-center">
        <div class="text-5xl gap-2 flex flex-row">
            <input 
                class="h-[78px] w-[108px] text-center rounded-md !outline-none" 
                type="number" 
                :value="hoursValue"
                @change="(e) => context.setHours(Number((e as InputEvent).target.value))" 
                :class="getInputClass(Type.hours)"
                min="1"
                max="12"
                @click="() => context.setType(Type.hours)"
            >
            <span class="text-light-onSurface text-6xl">:</span>

            <input 
                class="h-[78px] w-[108px] text-center rounded-md !outline-none" 
                type="number" 
                :value="minutesValue"
                min="0"
                max="59"
                @change="(e) => context.setMinutes(Number((e as InputEvent).target.value))" 
                :class="getInputClass(Type.minutes)"
                @click="() => context.setType(Type.minutes)"
            >
        </div>

        <div class="flex flex-col">
            <button
            v-ripple 
            class="rounded-t-lg px-4 py-2 -mb-px border-light-outline border" 
            :class="getButtonClass(Periods.AM)"
            @click="() => context.setPeriod(Periods.AM)"
            >{{ Periods.AM }}</button>
            <button 
            v-ripple
            class="rounded-b-lg  px-4 py-2 border-light-outline border" 
            :class="getButtonClass(Periods.PM)"
            @click="() => context.setPeriod(Periods.PM)"
            >{{ Periods.PM }}</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { InputEvent } from '../../../types';
import context, { Periods, Type } from './state';

const getInputClass = (type: Type) => type === context.type 
                ? 'bg-light-primaryContainer text-light-onPrimaryContainer' 
                : 'bg-light-surfaceContainerHighest text-light-onSurface';

const getButtonClass = (period: Periods) => period === context.period 
                ? "bg-light-tertiaryContainer text-light-onTertiaryContainer"
                : "text-light-onSurface";


const hoursValue = computed(() => {
    if (context.hours > 9) return context.hours;
    return "0" + context.hours;
})

const minutesValue = computed(() => {
    if (context.minutes > 9) return context.minutes;
    return "0" + context.minutes;
})
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>