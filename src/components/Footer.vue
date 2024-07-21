<script setup lang="ts">
import { ref } from 'vue';
import BottomSheet from './martialDesign/BottomSheet.vue';
import Icon from './martialDesign/Icon.vue';
import CreateHabit from './CreateHabit.vue';
import { RouterLink } from 'vue-router';

interface Tab {
    name: string;
    icon: string;
    link: string;
}

const tabs = ref<Tab[]>([
    { name: 'Home', icon: "home", link: "/" },
    { name: 'Tasks', icon: "checklist", link: "/tasks" },
    { name: 'Dashboard', icon: "bar_chart_4_bars", link: "/dashboard" },
    { name: 'Calendar', icon: "today", link: "/calendar" },
]);

const activeTab = ref<number>(0);
const isOpen = ref(false);
const closeSheet = () => { isOpen.value = false };
</script>

<template>
    <footer class="fixed bottom-0 w-full">
        <nav class="w-full bg-light-primaryContainer shadow-2xl-elevated relative select-none">
            <div class="flex justify-center xl:gap-40 md:gap-20 sm:gap-10 gap-4 w-full">
                <RouterLink v-ripple v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                    :class="{ 'opacity-50': activeTab !== index, 'xl:mr-56 md:mr-36 sm:mr-26 mr-16': index === 1 }"
                    :to="tab.link"
                    class="flex text-light-onPrimaryContainer flex-col items-center justify-center focus:outline-none transition-colors duration-300 relative overflow-hidden w-28 p-2 md:text-base sm:text-sm text-xs">
                    <Icon class="md:text-3xl sm:text-2xl text-lg">{{ tab.icon }}</Icon>
                    <span>{{ tab.name }}</span>
                </RouterLink>
            </div>
            <div @click="isOpen = true" class="flex justify-center md:w-12 md:h-12 w-10 h-10 items-center text-center rounded-lg shadow-lg-elevated absolute md:bottom-12 bottom-10 right-0 left-0 mx-auto bg-light-tertiaryContainer text-light-onTertiaryContainer cursor-pointer">
                <Icon class="md:text-2xl text-lg">add</Icon>
            </div>
        </nav>
        <BottomSheet :is-open="isOpen" :close-sheet="closeSheet">
            <CreateHabit :close-sheet="closeSheet"/>
        </BottomSheet>
    </footer>
</template>