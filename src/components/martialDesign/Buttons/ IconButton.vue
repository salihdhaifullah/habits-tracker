<template>
    <button v-ripple class="size-10 rounded-full text-center flex justify-center items-center">
        <Icon class="text-2xl text-light-onSurfaceVariant">{{ props.icon }}</Icon>
    </button>
</template>

<script lang="ts" setup>
import Icon from '../Icon.vue';

const props = defineProps<{ icon: string }>();
</script>