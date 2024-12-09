<template>
  <div>
    <h1>This is an about page</h1>
    <p>{{ counterStore.doubleCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore()
</script>
