import React, { useMemo } from 'react'
import { useCounterStore } from '../../store/counter'
import BaseCell from '../BaseCell/BaseCell'

function About() {
    const { computed } = useCounterStore()
    const cols = useMemo(() => [...Array(100)], [])
    const rows = useMemo(() => [...Array(100)], [])
    return (
        <table>
            <thead>
                <tr>
                    {cols.map((n, index) => (
                        <th key={index}>{index}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((r, rowN) => (
                    <tr key={rowN}>
                        {cols.map((c, cellN) => (
                            <BaseCell
                                key={cellN}
                                msg={rowN % 3 ? cellN : cellN * computed.doubleCount}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default About
