<template>
    <div class="relative w-80 h-80 bg-light-surfaceContainerHighest rounded-full">
        <HoursPicker v-if="context.type === Type.hours"/>
        <MinutesPicker v-else />
    </div>
</template>


<script lang="ts" setup>
import HoursPicker from './HoursPicker.vue';
import MinutesPicker from './MinutesPicker.vue';
import context, { Type } from './state';
</script>
