import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useTitle } from "@features/ui/hooks";
import { AppLayoutHeader } from "./app-layout-header";

type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const AppLayout = ({ children, title }: AppLayoutProps): JSX.Element => {
  useTitle(title);
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex
      direction="column"
      h="100vh"
      overflow="hidden"
      bgColor={bgColor}
      transition="0.15s all"
    >
      <AppLayoutHeader />
      <Flex
        w="100%"
        my="2"
        maxW={1600}
        mx="auto"
        px={["2", "4", "6"]}
        overflow="hidden"
        height="100%"
      >
        {children}
      </Flex>
    </Flex>
  );
};
