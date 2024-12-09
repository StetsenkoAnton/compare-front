import { Component, JSX } from 'solid-js'
import TheHeader from './components/TheHeader'
import CounterCTA from './components/CounterCTA'

const App: Component<{children: JSX.Element}> = (props) => {
    return (
        <>
            <TheHeader>
                <CounterCTA />
            </TheHeader>
            <main>
                { props.children }
            </main>
        </>
    )
}

export default App
