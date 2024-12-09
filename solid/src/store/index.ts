import { createStore } from 'solid-js/store'
import { createEffect } from 'solid-js'

const [counter, setStore] = createStore({
    count: 1,
    doubleCount: 2,
})
createEffect(() => {
    setStore("doubleCount", counter.count * 2)
})
function increment() {
    setStore('count', counter.count + 1)
}
function decrement() {
    setStore('count', counter.count - 1)
}
export { counter, increment, decrement }
