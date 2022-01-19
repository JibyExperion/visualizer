import React, { useState } from "react";
// import Video from "./Video";
import GeoChart from "./Geochart";
import data from "../custom.geo.json";

function Geo() {
  const [property, setProperty] = useState("pop_est");
  return (
    <React.Fragment>
      <GeoChart data={data} property={property} />

      <select
        value={property}
        onChange={(event) => setProperty(event.target.value)}
      >
        <option value="pop_est">Population</option>
        <option value="name_len">Name length</option>
        <option value="gdp_md_est">GDP</option>
      </select>
      {/* <Video /> */}
    </React.Fragment>
  );
}

export default Geo;
