import { counter, increment, decrement } from '../../store'

export const CounterCTA = () => {
    return (
        <>
            <button type="button" onClick={decrement}>
                -
            </button>
            <span>{counter.doubleCount}</span>
            <button type="button" onClick={increment}>
                +
            </button>
        </>
    );
}