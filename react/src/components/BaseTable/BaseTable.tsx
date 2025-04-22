import React from "react";
import { useCounterStore } from "../../store/counter";
import BaseCell from "../BaseCell/BaseCell";

const cols = [...Array(100)];
const rows = [...Array(100)];

function About() {
  const { count } = useCounterStore();
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
        {rows.map((_, rowN) => (
          <tr key={rowN}>
            {cols.map((_, cellN) => (
              <BaseCell
                key={cellN}
                msg={rowN % 3 ? cellN : cellN * count}
              />
              // <td>{rowN % 3 ? cellN : cellN * count}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default About;
