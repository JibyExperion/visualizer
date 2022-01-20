import React, { useState } from "react";
import Pie from "./Pie";
import { useChartStore } from "../context/ChartContext";

import { observer } from "mobx-react";

const Chartpie = observer(() => {
  const chartStore = useChartStore();
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
      <Pie data={chartStore.pieData} />
      <br />
      <br />
      <button onClick={() => chartStore.randomize()}>Randomize</button>
    </React.Fragment>
  );
});

export default Chartpie;
