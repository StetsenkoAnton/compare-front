<template>
  <button type="button" @click="counterStore.decrement">-</button>
  <span>{{ counterStore.doubleCount }}</span>
  <button type="button" @click="counterStore.increment">+</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
