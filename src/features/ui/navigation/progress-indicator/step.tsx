import { useColorscheme } from "@/features/ui/hooks";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useProgressIndicatorContext } from "./progress-indicator.context";
import { StepBullet, StepBulletProps } from "./step-blullet";
import { StepContainer } from "./step-container";

export interface StepProps extends StepBulletProps {
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
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
  const titleColor = useColorModeValue("gray.900", "gray.200");

  return (
    <StepContainer
      cursor={disabled ? "not-allowed" : ""}
      minH="80px"
      accentcolor={colors.accent}
      basecolor={colors.base}
      position="relative"
      className={`${containerClass} ${disabledClass} ${completedClass}`}
    >
      <Flex justifyContent="center">
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
          color={current && !disabled ? colors.accent : titleColor}
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
        {current && <Box py="3">{children}</Box>}
      </Flex>
    </StepContainer>
  );
};
