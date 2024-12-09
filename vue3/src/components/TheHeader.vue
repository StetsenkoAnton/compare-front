<template>
  <header class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div class="header">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  line-height: 1.5;
}

nav {
  width: 100%;
  text-align: center;
  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    &:first-of-type {
      border: 0;
    }
    .router-link-exact-active {
      color: var(--color-text);
      &:hover {
        background-color: transparent;
      }
    }
  }
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem;
  }
}
</style>
