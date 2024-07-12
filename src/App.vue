<script setup lang="ts">
import { onMounted } from "vue";
import Footer from "./components/Footer.vue"
import context from "./context";

onMounted(() => context.init())
</script>

<template>
  <div id="app" class="min-h-screen">
    <div class="flex h-full w-full mb-24 mt-10">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
