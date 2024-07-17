<template>
    <div class="relative w-80 h-80 bg-white rounded-full shadow-lg">
        <HoursPicker v-if="context.type === Type.hours"/>
        <MinutesPicker v-else />

        <div class="absolute inset-[calc(50%-4px)] w-2 h-2 rounded-full bg-light-primary"></div>

        <div class="absolute inset-[calc(50%-2px)] origin-top-left w-1 h-36 bg-light-primary"
            :style="{ transform: `rotate(${context.hours * -30}deg)` }"></div>

        <div class="absolute inset-[calc(50%-2px)] origin-top-left w-1 h-36 bg-light-primary"
            :style="{ transform: `rotate(${context.minutes * -6}deg)` }"></div>
    </div>
</template>


<script lang="ts" setup>
import HoursPicker from './HoursPicker.vue';
import MinutesPicker from './MinutesPicker.vue';
import context, { Type } from './state';
</script>
