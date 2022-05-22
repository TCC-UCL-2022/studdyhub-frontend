import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type RadioCardProps = UseRadioProps & {
  fullWidth?: boolean;
};

export const RadioCard = ({
  children,
  fullWidth,
  ...props
}: PropsWithChildren<RadioCardProps>) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" w={fullWidth ? "100%" : ""}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.600",
          color: "white",
          borderColor: "blue.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
        transition="all 0.2s"
      >
        {children}
      </Box>
    </Box>
  );
};
