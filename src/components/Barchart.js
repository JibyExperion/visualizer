import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

import { useChartStore } from "../context/ChartContext";

import { observer } from "mobx-react";

const Barchart = observer(() => {
  const chartStore = useChartStore();
  
  // const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // scales
    const xScale = scaleBand()
      .domain(chartStore.data.map((value, index) => index))
      .range([0, 200])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 100]).range([100, 0]);

    const colorScale = scaleLinear()
      .domain([75, 90, 100])
      .range(["green", "orange", "red"])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(chartStore.data.length);
    svg.select(".x-axis").style("transform", "translateY(100px)").call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(200px)").call(yAxis);
    console.log(chartStore.data);
    // draw the bars
    svg
      .selectAll(".bar")
      .data(chartStore.data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -100)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (event, value) => {
        // events have changed in d3 v6:
        // https://observablehq.com/@d3/d3v6-migration-guide#events
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 100 - yScale(value));
  }, [chartStore.data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>{" "}
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => chartStore.update()}>Update data</button>
      <button onClick={() => chartStore.filter()}>Filter data</button>
      <button onClick={() => chartStore.add()}>Add data</button>
    </React.Fragment>
  );
});

export default Barchart;
