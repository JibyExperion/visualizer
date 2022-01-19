import React, { createContext, useContext } from "react";

import { Chartstore } from "../stores/Chartstore";

import { useLocalObservable } from "mobx-react";

const ChartContext = createContext(null);

export const ChartProvider = ({ children }) => {
  const chartStore = useLocalObservable(Chartstore);

  return (
    <ChartContext.Provider value={chartStore}>{children}</ChartContext.Provider>
  );
};
export const useChartStore = () => useContext(ChartContext);
