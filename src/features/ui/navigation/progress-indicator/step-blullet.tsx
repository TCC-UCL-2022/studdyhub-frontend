import { ColorScheme, useColorscheme } from "@/features/ui/hooks";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { RiAlertLine, RiCheckLine } from "react-icons/ri";

export interface StepBulletProps {
  type?: "number" | "bullet";
  /**
   * Add the `current` style to the step
   */
  current?: boolean;
  /**
   * Add the `done` style to the step
   */
  done?: boolean;
  /**
   * Add the `error` style to the step
   */
  error?: boolean;
  disabled?: boolean;
  colorScheme?: string;
}

const stepStyleByStatus = {
  current: {
    color: "white",
  },

  done: {
    bg: "gray.200",
    borderColor: "transparent",
    color: "gray.600",
  },

  error: {
    bg: "red.100",
    borderColor: "transparent",
    color: "red.600",
  },

  incomplete: {
    bg: "white",
    borderColor: "gray.300",
    color: "gray.600",
  },
};

const getStyleByStepStatus = (
  current: boolean | undefined,
  done: boolean | undefined,
  error: boolean | undefined,
  colorScheme: ColorScheme
) => {
  if (done) return stepStyleByStatus.done;
  if (error) return stepStyleByStatus.error;
  if (current)
    return {
      ...stepStyleByStatus.current,
      bg: colorScheme.accent,
      borderColor: colorScheme.base,
    };

  return stepStyleByStatus.incomplete;
};

export const StepBullet: React.FC<StepBulletProps> = ({
  type = "number",
  current,
  done,
  colorScheme = "blue",
  error,
  disabled,
}) => {
  const colors = useColorscheme(colorScheme);
  const stylesByStatus = getStyleByStepStatus(current, done, error, colors);
  const showText = type === "number" && !done && !error;
  const hideBorder =
    !disabled && (done || error || (current && type !== "bullet"));

  const stepIncompleteClass =
    !done && !error && !current ? "progress-step__bullet--incomplete" : "";

  return (
    <Flex
      borderRadius="full"
      h="24px"
      w="24px"
      boxSizing="border-box"
      borderWidth={type === "bullet" ? "4px" : "2px"}
      justifyContent="center"
      alignItems="center"
      opacity={disabled ? 0.4 : 1}
      {...stylesByStatus}
      borderColor={hideBorder ? "transparent" : stylesByStatus.borderColor}
      className={`progress-step__bullet ${stepIncompleteClass}`}
    >
      {showText && (
        <Text
          fontSize="sm"
          lineHeight="4"
          fontWeight={current ? "bold" : "medium"}
          color={stylesByStatus.color}
          className="progress-step__counter"
        ></Text>
      )}

      {done && !error && (
        <Icon
          as={RiCheckLine}
          fill={stylesByStatus.color}
          className="progress-step__icon"
          w="16px"
        />
      )}

      {error && !done && (
        <Icon
          as={RiAlertLine}
          fill={stylesByStatus.color}
          className="progress-step__icon"
          w="16px"
        />
      )}
    </Flex>
  );
};
