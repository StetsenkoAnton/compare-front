<template>
  <table>
    <thead>
      <tr>
        <th v-for="(_, index) in cols" :key="index">{{ index }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(_, rowN) in rows" :key="rowN">
        <BaseCell
          v-for="(_, cellN) in cols"
          :key="cellN"
          :msg="rowN % 3 ? cellN : cellN * counterStore.doubleCount"
        />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import BaseCell from '@/components/BaseCell.vue'

const counterStore = useCounterStore()
const cols = [...Array(100)]
const rows = [...Array(100)]
</script>
