import React from 'react'
import { useCounterStore } from '../store/counter'

function About() {
    const { computed } = useCounterStore()
    return (
        <div>
            <h1>This is an about page</h1>
            <p>{ computed.doubleCount}</p>
        </div>
    )
}

export default About
