import { Box, Flex, Text } from "@chakra-ui/react";
import { useColorscheme } from "@features/ui/hooks";
import React from "react";
import { useProgressIndicatorContext } from "./progress-indicator.context";
import { StepBullet, StepBulletProps } from "./step-blullet";
import { StepContainer } from "./step-container";

export interface StepProps extends StepBulletProps {
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
  /**
   * Defines if the step is disabled
   */
  disabled?: boolean;
}

export const Step: React.FC<StepProps> = ({
  type,
  title,
  done,
  error,
  current,
  subtitle,
  disabled,
  children,
}) => {
  const { mode, colorScheme } = useProgressIndicatorContext();

  const containerClass =
    mode === "vertical"
      ? "progress-step__v-container"
      : "progress-step__h-container";

  const disabledClass = disabled ? "progress-step--disabled" : "";
  const completedClass = done ? "progress-step--completed" : "";
  const colors = useColorscheme(colorScheme);

  return (
    <StepContainer
      cursor={disabled ? "not-allowed" : ""}
      minH="80px"
      accentcolor={colors.accent}
      basecolor={colors.base}
      position="relative"
      className={`${containerClass} ${disabledClass} ${completedClass}`}
    >
      <Flex h="100%" justifyContent="center">
        <StepBullet
          type={type}
          done={done}
          current={current}
          error={error}
          disabled={disabled}
          colorScheme={colorScheme}
        />
      </Flex>

      <Flex
        direction="column"
        pl="2"
        pt={mode === "vertical" ? 0 : "2"}
        alignItems={mode === "vertical" ? "flex-start" : "center"}
      >
        <Text
          as="h3"
          fontSize="sm"
          className="progress-step__title"
          textAlign={mode === "vertical" ? "initial" : "center"}
          fontWeight={current ? "bold" : "semibold"}
          color={current && !disabled ? colors.accent : "gray.900"}
          opacity={disabled ? 0.4 : 1}
        >
          {title}
        </Text>
        <Text
          as="h4"
          fontSize="xs"
          fontWeight="medium"
          color="gray.500"
          textAlign={mode === "vertical" ? "initial" : "center"}
          opacity={disabled ? 0.4 : 1}
        >
          {subtitle}
        </Text>
        <Box py="3">{children}</Box>
      </Flex>
    </StepContainer>
  );
};
