<template>
  <TheHeader v-once>
    <CounterCTA/>
  </TheHeader>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue';
import CounterCTA from '@/components/CounterCTA.vue';
</script>
