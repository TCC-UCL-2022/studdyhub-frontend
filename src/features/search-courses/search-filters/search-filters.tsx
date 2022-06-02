import { Box, useColorModeValue } from "@chakra-ui/react";

export const SearchFilters = (): JSX.Element => {
  return (
    <Box
      maxW="72"
      w="100%"
      h="100%"
      bgColor={useColorModeValue("white", "whiteAlpha.50")}
    >
      Filtros
    </Box>
  );
};
