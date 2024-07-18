<template>
  <div class="flex flex-row gap-4 justify-center items-center">
    <div class="text-5xl gap-2 flex flex-row">
      <input class="h-[78px] w-[108px] text-center rounded-md outline-light-onPrimaryContainer" :value="context.hours"
        type="number" @input="(e) => onChange(e as InputEvent, Type.hours)"
        @keydown="(e) => handleKeyDown(e, Type.hours)" :class="getInputClass(Type.hours)" min="1" max="12"
        @focus="() => context.setType(Type.hours)" />

      <span class="text-light-onSurface text-6xl">:</span>

      <input class="h-[78px] w-[108px] text-center rounded-md outline-light-onPrimaryContainer" :value="context.minutes"
        type="number" min="0" max="59" @input="(e) => onChange(e as InputEvent, Type.minutes)"
        :class="getInputClass(Type.minutes)" @keydown="(e) => handleKeyDown(e, Type.minutes)"
        @focus="() => context.setType(Type.minutes)" />
    </div>

    <div class="flex flex-col">
      <button v-ripple class="rounded-t-lg px-4 py-2 -mb-px border-light-outline border"
        :class="getButtonClass(Periods.AM)" @click="() => context.setPeriod(Periods.AM)">
        {{ Periods.AM }}
      </button>

      <button v-ripple class="rounded-b-lg px-4 py-2 border-light-outline border" :class="getButtonClass(Periods.PM)"
        @click="() => context.setPeriod(Periods.PM)">
        {{ Periods.PM }}
      </button>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { InputEvent } from "../../../types";
import context, { Periods, Type } from "./state";

const getInputClass = (type: Type) =>
  type === context.type
    ? "bg-light-primaryContainer text-light-onPrimaryContainer"
    : "bg-light-surfaceContainerHighest text-light-onSurface";

const getButtonClass = (period: Periods) =>
  period === context.period
    ? "bg-light-tertiaryContainer text-light-onTertiaryContainer"
    : "text-light-onSurface";

const onChange = (e: InputEvent, type: Type) => {
  const input = e.target as HTMLInputElement;
  const newValue = input.value;

  if (newValue.length > 2 &&  Number(newValue) > Number(input.max)) {
    const val = Number(newValue.slice(newValue.length - 2, newValue.length));
    const newValuestr = val.toString(); 
    if (val > Number(input.max)) {
      input.value = context.hours;
    }  else if (newValuestr.length === 2) {
    context.hours = newValuestr;
  } else {
    if (newValuestr.length > 2) {
      context.hours = newValuestr.slice(newValuestr.length - 2, newValuestr.length)
    } else {
      context.hours = "0" + newValuestr
    }
  }
  } else if (newValue.length === 2) {
    context.hours = newValue;
  } else {
    if (newValue.length > 2) {
      context.hours = newValue.slice(newValue.length - 2, newValue.length)
    } else {
      context.hours = "0" + newValue
    }
  }

}

const handleKeyDown = (e: KeyboardEvent, type: Type) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    type === Type.hours ? handleHoursKeys(true) : handleMinutesKeys(true);
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    type === Type.hours ? handleHoursKeys(false) : handleMinutesKeys(false);
    return;
  }
};

const handleHoursKeys = (isUp: boolean) => {
  if (isUp) {
    if (context.hours === "12") {
      context.hours = "01";
    } else {
      const val = (Number(context.hours) + 1).toString();
      if (val.length === 1) context.hours = "0" + val
      else context.hours = val
    }
  }
  else {
    if (context.hours === "01") {
      context.hours = "12";
    } else {
      const val = (Number(context.hours) - 1).toString();
      if (val.length === 1) context.hours = "0" + val
      else context.hours = val
    }
  }
};

const handleMinutesKeys = (isUp: boolean) => {
  if (isUp) {
    if (context.minutes === "59") {
      context.minutes = "00"
    } else {
      const val = (Number(context.minutes) + 1).toString();
      if (val.length === 1) context.minutes = "0" + val
      else context.minutes = val
    }
  }
  else {
    if (context.minutes === "00") {
      context.minutes = "59"
    } else {
      const val = (Number(context.minutes) - 1).toString();
      if (val.length === 1) context.minutes = "0" + val
      else context.minutes = val
    }
  }
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>