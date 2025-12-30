<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheNavBar />
  <RouterView />
  <TheFooter />
</template>

<style scoped>
/* No specific scoped styles needed for App.vue if components handle their own styling */
</style>