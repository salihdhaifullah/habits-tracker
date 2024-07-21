<script setup lang="ts">
import context from './state';
</script>

<template>
    <div class="fixed inset-0 top-[20vh] z-50 flex flex-col h-fit w-fit transform shadow-lg-elevated"
        :class="{ 'translate-y-full': !context.isOpen }">
        <slot></slot>
    </div>

    <div @click="context.close"
        class="fixed inset-0 w-full h-screen bg-light-scrim bg-opacity-50 z-10 transform transition-transform duration-300"
        :class="{ 'translate-y-full': !context.isOpen }"></div>
</template>