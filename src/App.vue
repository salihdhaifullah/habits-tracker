<script setup lang="ts">
import { onMounted } from "vue";
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import context from "./context";

onMounted(() => context.init())
</script>

<template>
  <main id="app" class="min-h-screen bg-light-background">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>
