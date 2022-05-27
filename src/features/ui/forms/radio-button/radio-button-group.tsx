import { ButtonGroup, ButtonGroupProps, useRadioGroup } from "@chakra-ui/react";
import { RadioButtonContext, StringOrNumber } from "./radio-button.context";

export type RadioButtonGroupProps = ButtonGroupProps & {
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
  const { value: currentValue, setValue } = useRadioGroup({
    value,
    onChange,
  });

  return (
    <RadioButtonContext.Provider value={{ currentValue, setValue }}>
      <ButtonGroup isAttached={isAttached} {...props}>
        {children}
      </ButtonGroup>
    </RadioButtonContext.Provider>
  );
};
