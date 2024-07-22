<template>
  <div class="flex flex-row gap-4 justify-center items-center text-center">
    <div class="text-5xl gap-2 flex flex-row h-full">
      <NumberFiled 
        :value="context.hours"
        @update-value="((v: number) => context.setHours(v))"
        :class="getInputClass(Type.hours)" 
        :min="1"
        :max="12"
        :focus="() => context.setType(Type.hours)"
        />

      <span class="text-light-onSurface text-6xl">:</span>

      <NumberFiled 
        :value="context.minutes"
        @update-value="((v: number) => context.setMinutes(v))"
        :class="getInputClass(Type.minutes)" 
        :min="0"
        :max="59"
        :focus="() => context.setType(Type.minutes)"
        />
    </div>

    <div class="flex flex-col h-full">
      <button v-ripple class="rounded-t-lg px-4 py-2 -mb-px border-light-outline border h-full"
        :class="getButtonClass(Periods.AM)" @click="() => context.setPeriod(Periods.AM)">
        {{ Periods.AM }}
      </button>

      <button v-ripple class="rounded-b-lg px-4 py-2 border-light-outline border h-full" :class="getButtonClass(Periods.PM)"
        @click="() => context.setPeriod(Periods.PM)">
        {{ Periods.PM }}
      </button>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import NumberFiled from "../NumberFiled.vue";
import context, { Periods, Type } from "./state";

const getInputClass = (type: Type) =>
  type === context.type
    ? "bg-light-primaryContainer text-light-onPrimaryContainer"
    : "bg-light-surfaceContainerHighest text-light-onSurface";

const getButtonClass = (period: Periods) =>
  period === context.period
    ? "bg-light-tertiaryContainer text-light-onTertiaryContainer"
    : "text-light-onSurface";
</script>