<template>
    <div v-for="n in context.hoursOptions" :key="n" :style="{ transform: `rotate(${Number(n) * 30}deg) translate(0, -140px)` }"
        class="absolute inset-[calc(50%-16px)] w-8 h-8">

        <span v-ripple :class="{ 'bg-light-primary text-light-onPrimary': context.hours === Number(n) }"
            class="absolute w-8 h-8 justify-center items-center flex rounded-full transition-all"
            @click="context.hours = Number(n)" :style="{ transform: `rotate(${Number(n) * -30}deg)` }">
            <span>{{ n }}</span>
        </span>
    </div>
</template>

<script lang="ts" setup>
import context from './state';
</script>