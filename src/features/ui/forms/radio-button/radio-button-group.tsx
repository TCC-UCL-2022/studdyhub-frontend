import { ButtonGroup, ButtonGroupProps, useRadioGroup } from "@chakra-ui/react";
import { RadioButtonContext, StringOrNumber } from "./radio-button.context";

export type RadioButtonGroupProps = Omit<ButtonGroupProps, "onChange"> & {
  value: StringOrNumber;
  onChange: (value: StringOrNumber) => void;
};

export const RadioButtonGroup = ({
  isAttached = true,
  children,
  onChange,
  value,
  ...props
}: RadioButtonGroupProps): JSX.Element => {
  const { value: currentValue, onChange: setValue } = useRadioGroup({
    value,
    onChange: (e) => {
      onChange(e);
    },
  });

  return (
    <ButtonGroup isAttached={isAttached} {...props}>
      <RadioButtonContext.Provider value={{ currentValue, setValue }}>
        {children}
      </RadioButtonContext.Provider>
    </ButtonGroup>
  );
};
