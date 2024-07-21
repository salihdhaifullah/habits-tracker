<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
    <span class="material-symbols-outlined" :class="props.class">
        <slot></slot>
    </span>
</template>


<style scoped>
span {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
</style>