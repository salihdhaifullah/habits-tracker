<script setup lang="ts">
import { ref } from 'vue';
import BottomSheet from './BottomSheet.vue';
import Icon from './Icon.vue';

interface Tab {
    name: string;
    icon: string;
    link: string;
}

const tabs = ref<Tab[]>([
    { name: 'Home', icon: "home", link: "/" },
    { name: 'Tasks', icon: "checklist", link: "/tasks" },
    { name: 'Dashboard', icon: "bar_chart_4_bars", link: "/dashboard" },
]);

const activeTab = ref<number>(0);
const showSheet = ref(false);
</script>

<template>
    <nav class="fixed bottom-0 w-full bg-surface shadow-2xl-elevated">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="flex justify-around py-2">
                <button v-ripple v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                    :class="{ 'text-primary': activeTab === index, 'text-text-secondary': activeTab !== index }"
                    class="flex items-center justify-center flex-1 py-2 focus:outline-none transition-colors duration-300 relative overflow-hidden">
                    <Icon>{{ tab.icon }}</Icon>
                    <span class="ml-2">{{ tab.name }}</span>
                </button>
            </div>
        </div>
        <div
            @click="showSheet = true"
            class="flex justify-center items-center text-center p-2 rounded-full shadow-lg-elevated fixed bottom-20 right-4 bg-secondary text-surface cursor-pointer">
            <Icon>add</Icon>
        </div>
    </nav>

    <BottomSheet v-model="showSheet">
        <h1 class="text-primary-dark">Bottom Sheet Content</h1>
        <p class="text-text-primary">This is the content inside the bottom sheet.</p>
    </BottomSheet>
</template>