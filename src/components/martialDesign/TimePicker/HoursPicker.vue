<template>
  <div v-for="n in context.hoursOptions" :key="n"
    :style="{ transform: `rotate(${Number(n) * 30}deg) translate(0, -135px)` }"
    class="absolute inset-[calc(50%-16px)] w-8 h-8 z-50">

    <span v-ripple :class="{ 'text-light-onPrimary': context.hours === n }"
      class="absolute w-8 h-8 justify-center items-center flex rounded-full transition-all" @click="context.hours = n"
      :style="{ transform: `rotate(${Number(n) * -30}deg)` }">
      <span>{{ n }}</span>
    </span>
  </div>

  <div class="flex w-full h-full justify-center items-center">
    <div :style="{ transform: `rotate(${(Number(context.hours) * 30) + 270}deg)` }">
      <div class="w-2 h-2 bg-light-primary rounded-full relative">
        <div
          class="absolute top-1/2 left-0 transform -translate-y-1/2 w-40 h-[2px] bg-light-primary flex justify-end items-center">
          <div class="w-10 h-10 bg-light-primary rounded-full inline-block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import context from './state';
</script>