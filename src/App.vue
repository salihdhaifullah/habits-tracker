<script setup lang="ts">
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
</script>

<template>
  <main id="app" class="min-h-screen bg-background">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>
