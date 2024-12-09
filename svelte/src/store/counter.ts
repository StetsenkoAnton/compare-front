import { writable, derived } from 'svelte/store';

export const count = writable(1);
export const doubleCount = derived(count, ($count) => $count * 2);
export const increment = () => count.update((n) => n + 1);
export const decrement = () => count.update((n) => n - 1);
