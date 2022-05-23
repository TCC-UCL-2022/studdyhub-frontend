import { Flex, FlexProps } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import {
  ProgressIndicatorContext,
  ProgressMode,
} from "./progress-indicator.context";

export interface ProgressIndicatorProps extends FlexProps {
  /**
   * Defines the orientation of the progress
   */
  mode?: ProgressMode;
  /**
   * Defines the colorscheme of the progress
   */
  colorScheme?: string;
}

const ProgressIndicatorBase: FC<ProgressIndicatorProps> = ({
  mode = "horizontal",
  children,
  colorScheme = "blue",
  ...props
}) => (
  <Flex
    sx={{ counterReset: "step" }}
    direction={mode === "vertical" ? "column" : "row"}
    {...props}
  >
    <ProgressIndicatorContext.Provider value={{ mode, colorScheme }}>
      {children}
    </ProgressIndicatorContext.Provider>
  </Flex>
);

const ProgressIndicator = memo(ProgressIndicatorBase);

export { ProgressIndicator };
