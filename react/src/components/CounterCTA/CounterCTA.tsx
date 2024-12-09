import React from 'react'
import { useCounterStore } from '../../store/counter'

function CounterCTA() {
    const { computed, decrement, increment } = useCounterStore()
    return (
        <>
            <button type="button" onClick={decrement}>
                -
            </button>
            <span>{computed.doubleCount}</span>
            <button type="button" onClick={increment}>
                +
            </button>
        </>
    )
}

export default CounterCTA
