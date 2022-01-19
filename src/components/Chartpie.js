import React, { useState } from "react";
import Pie from "./Pie";

function Chartpie() {
  const [data, setData] = useState([
    {
      name: "apples",
      value: 100,
    },
    {
      name: "bananas",
      value: 300,
    },
    {
      name: "cherries",
      value: 250,
    },
  ]);

  return (
    <React.Fragment>
      <Pie data={data} />
      <br />
      <br />
      <button
        onClick={() => {
          setData([
            {
              name: "apples",
              value: Math.round(Math.random() * 100),
            },
            {
              name: "bananas",
              value: Math.round(Math.random() * 200),
            },
            {
              name: "cherries",
              value: Math.round(Math.random() * 300),
            },
          ]);
        }}
      >
        Randomize
      </button>
    </React.Fragment>
  );
}

export default Chartpie;
