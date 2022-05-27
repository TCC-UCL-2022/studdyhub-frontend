import { createContext, useContext } from "react";

export type StringOrNumber = string | number;

export type RadioButtonContextProps = {
  currentValue: StringOrNumber;
  setValue: (value: StringOrNumber) => void;
};

const defaultContext: RadioButtonContextProps = {
  currentValue: "",
  setValue: () => {},
};

export const RadioButtonContext = createContext(defaultContext);

export const useRadioButtonContext = () => {
  const context = useContext<RadioButtonContextProps>(RadioButtonContext);

  if (!context) {
    throw new Error(
      "useRadioButtonContext must be used within a RadioButtonContextProvider"
    );
  }

  return context;
};
