import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from "d3";

import { useChartStore } from "../context/ChartContext";

import { observer } from "mobx-react";

const Chart = observer(() => {
  const chartStore = useChartStore();
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, chartStore.dataLine.length - 1])
      .range([0, 200]);

    const yScale = scaleLinear().domain([0, 100]).range([100, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(chartStore.dataLine.length)
      .tickFormat((index) => index + 1);
    svg.select(".x-axis").style("transform", "translateY(100px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(200px)").call(yAxis);

    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // renders path element, and attaches
    // the "d" attribute from line generator above
    svg
      .select(".content")
      .selectAll(".myLine")
      .data([chartStore.dataLine])
      .join("path")
      .attr("class", "myLine")
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("d", myLine);
    svg
      .select(".content")
      .selectAll(".myDot")
      .data(chartStore.dataLine)
      .join("circle")
      .attr("class", "myDot")
      .attr("stroke", "black")
      .attr("r", 4)
      .attr("fill", "orange")
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", yScale);
  }, [chartStore.dataLine]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="content" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => chartStore.updateLine()}>Update data</button>
      <button onClick={() => chartStore.filterLine()}>Filter data</button>
      <button onClick={() => chartStore.addLine()}>Add data</button>
    </React.Fragment>
  );
});

export default Chart;
