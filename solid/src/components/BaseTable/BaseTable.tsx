import { Index } from 'solid-js'
import { counter } from '../../store'
import BaseCell from '../BaseCell'

const cols = [...Array(100)]
const rows = [...Array(100)]

function BaseTable() {
    return (
        <table>
            <thead>
                <tr>
                    <Index each={cols}>{(_, index) => <th>{index}</th>}</Index>
                </tr>
            </thead>
            <tbody>
                <Index each={rows}>
                    {(_, rowN) => (
                        <tr>
                            <Index each={cols}>
                                {(_, cellN) => (
                                    // <BaseCell
                                    //     msg={
                                    //         rowN % 3
                                    //             ? cellN
                                    //             : cellN * counter.doubleCount
                                    //     }
                                    // />
                                    <td>
                                        {rowN % 3
                                            ? cellN
                                            : cellN * counter.doubleCount}
                                    </td>
                                )}
                            </Index>
                        </tr>
                    )}
                </Index>
            </tbody>
        </table>
    )
}

export default BaseTable
