import {
  Box,
  ButtonProps,
  Center,
  useColorModeValue,
  useRadio,
  UseRadioProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type RadioCardProps = UseRadioProps & {
  fullWidth?: boolean;
  colorScheme?: ButtonProps["colorScheme"];
};

export const RadioCard = ({
  children,
  fullWidth,
  colorScheme = "blue",
  ...props
}: PropsWithChildren<RadioCardProps>) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const activeBgColor = useColorModeValue(
    `${colorScheme}.500`,
    `${colorScheme}.200`
  );

  return (
    <Box as="label" w={fullWidth ? "100%" : ""}>
      <input {...input} />
      <Center
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg={bgColor}
        borderColor={bgColor}
        _checked={{
          bg: activeBgColor,
          color: useColorModeValue("white", "black"),
          borderColor: activeBgColor,
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
        transition="all 0.2s"
        minH="28"
        fontWeight="semibold"
        fontSize="lg"
      >
        {children}
      </Center>
    </Box>
  );
};
