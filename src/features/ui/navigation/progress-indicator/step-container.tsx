import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StepContainer = styled(Flex)`
  padding-top: 4px;

  &:not(.progress-step--disabled):hover {
    .progress-step__title {
      color: ${({ accentcolor }) => accentcolor};
    }

    .progress-step__bullet--incomplete {
      border-color: ${({ basecolor }) => basecolor} !important;

      p {
        color: ${({ accentcolor }) => accentcolor} !important;
      }
    }
  }

  &.progress-step--completed:not(.progress-step--disabled):hover {
    .progress-step__bullet {
      background-color: ${({ basecolor }) => basecolor};
    }

    .progress-step__icon {
      fill: ${({ accentcolor }) => accentcolor};
    }
  }

  &.progress-step__v-container {
    counter-increment: step;

    &:before {
      content: "";
      position: absolute;
      top: 32px;
      bottom: 0;
      left: 10px;
      width: 4px;
      background-color: #edf1f7;
    }

    &:last-child:before {
      background-color: transparent;
    }

    .progress-step__counter::before {
      content: counter(step);
    }
  }

  &.progress-step__h-container {
    counter-increment: step;

    min-width: 160px;
    flex-direction: column;
    align-items: center;

    .progress-step__counter::before {
      content: counter(step);
    }

    &:before {
      content: "";
      position: absolute;
      top: 12px;
      left: 0;
      right: calc(50% + 16px);
      height: 4px;
      background-color: #edf1f7;
    }

    &:after {
      content: "";
      position: absolute;
      top: 12px;
      right: 0;
      left: calc(50% + 16px);
      height: 4px;
      background-color: #edf1f7;
    }

    &:last-child:after,
    &:first-of-type:before {
      background-color: transparent;
    }
  }
`;
