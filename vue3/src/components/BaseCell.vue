<template>
  <td>
    {{ msg }}
  </td>
</template>

<script setup lang="ts">
defineProps<{
  msg: number
}>()
</script>
