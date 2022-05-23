import React, { useContext } from "react";

export type ProgressMode = "horizontal" | "vertical";

const defaultValue = {
  mode: "horizontal" as ProgressMode,
  colorScheme: "blue",
};

export const ProgressIndicatorContext = React.createContext(defaultValue);

export const useProgressIndicatorContext = () =>
  useContext(ProgressIndicatorContext);
