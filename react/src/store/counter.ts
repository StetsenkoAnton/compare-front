import { create } from 'zustand'

interface CountState {
    count: number
    computed: {
        doubleCount: number
    }
    increment: () => void
    decrement: () => void
}

export const useCounterStore = create<CountState>()((set, get) => ({
    count: 1,
    computed: {
        get doubleCount() {
            return get().count * 2
        },
    },
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))
