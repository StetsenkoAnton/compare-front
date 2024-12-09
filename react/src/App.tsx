import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import TheHeader from './components/TheHeader'
import CounterCTA from './components/CounterCTA'

function App() {
    return (
        <>
            <TheHeader>
                <CounterCTA />
            </TheHeader>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </>
    )
}

export default App
