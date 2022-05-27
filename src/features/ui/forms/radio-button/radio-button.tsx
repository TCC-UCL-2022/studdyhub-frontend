import { Button, ButtonProps } from "@chakra-ui/react";
import { StringOrNumber, useRadioButtonContext } from "./radio-button.context";

export type RadioButtonProps = ButtonProps & {
  value: StringOrNumber;
};

export const RadioButton = ({
  value,
  children,
  ...props
}: RadioButtonProps): JSX.Element => {
  const { setValue, currentValue } = useRadioButtonContext();

  const isSelected = currentValue === value;

  return (
    <Button
      {...props}
      key={`button-group-field-option-${value}`}
      w="24"
      onClick={() => setValue(value)}
      {...(isSelected && {
        colorScheme: "blue",
        variant: "solid",
      })}
    >
      {children}
    </Button>
  );
};
