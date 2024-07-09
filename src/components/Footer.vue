<script setup lang="ts">
import { ref } from 'vue';
import BottomSheet from './BottomSheet.vue';
import Icon from './Icon.vue';
import CreateHabit from './CreateHabit.vue';

interface Tab {
    name: string;
    icon: string;
    link: string;
}

const tabs = ref<Tab[]>([
    { name: 'Home', icon: "home", link: "/" },
    { name: 'Tasks', icon: "checklist", link: "/tasks" },
    { name: 'Dashboard', icon: "bar_chart_4_bars", link: "/dashboard" },
    { name: 'Settings', icon: "settings", link: "/Settings" },
]);

const activeTab = ref<number>(0);
const isOpen = ref(false);
const closeSheet = () => {isOpen.value = false};
</script>

<template>
    <nav class="fixed bottom-0 w-full bg-light-surface shadow-2xl-elevated">
        <div class="flex justify-evenly py-2 px-2 sm:px-6 lg:px-8 w-full">
            <button v-ripple v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                :class="{ 'bg-light-primaryContainer text-light-onPrimaryContainer': activeTab === index, 'text-light-onSurface bg-light-surfaceDim': activeTab !== index }"
                class="flex items-center justify-center py-2 focus:outline-none transition-colors duration-300 relative overflow-hidden w-40">
                <Icon>{{ tab.icon }}</Icon>
                <span class="ml-2">{{ tab.name }}</span>
            </button>
        </div>
        <div @click="isOpen = true"
            class="flex justify-center w-12 h-12 items-center text-center rounded-lg shadow-lg-elevated fixed bottom-20 right-4 bg-light-secondary text-light-onSecondary cursor-pointer">
            <Icon size="3xl">add</Icon>
        </div>
    </nav>

    <BottomSheet :is-open="isOpen" :close-sheet="closeSheet">
        <CreateHabit />
    </BottomSheet>
</template>