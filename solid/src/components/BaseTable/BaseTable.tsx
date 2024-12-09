import { Index } from 'solid-js'
import { counter } from '../../store'
import BaseCell from '../BaseCell'

const cols = [...Array(100)]
const rows = [...Array(100)]

function About() {
    return (
        <>
            <p>{counter.doubleCount}</p>
            <table>
                <thead>
                    <tr>
                        <Index each={cols}>
                            {(_, index) => <th>{index}</th>}
                        </Index>
                    </tr>
                </thead>
                <tbody>
                    <Index each={rows}>
                        {(_, rowN) => (
                            <tr>
                                <Index each={cols}>
                                    {(_, cellN) => (
                                        <BaseCell
                                            msg={
                                                rowN % 3
                                                    ? cellN
                                                    : cellN *
                                                      counter.doubleCount
                                            }
                                        />
                                    )}
                                </Index>
                            </tr>
                        )}
                    </Index>
                </tbody>
            </table>
        </>
    )
}

export default About
