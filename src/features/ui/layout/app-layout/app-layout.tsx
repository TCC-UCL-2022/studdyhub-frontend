import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useTitle } from "@features/ui/hooks";
import { Footer } from "./footer";
import { Header } from "./header";

export type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const AppLayout = ({ children, title }: AppLayoutProps): JSX.Element => {
  useTitle(title);

  return (
    <Flex
      h="100vh"
      w="100%"
      direction="column"
      overflow="hidden"
      transition="0.15s all"
      justify="flex-start"
    >
      <Header />
      <Flex
        bgColor={useColorModeValue("gray.200", "gray.900")}
        direction="column"
        align="center"
        h="100%"
        overflowY="auto"
        scrollBehavior="smooth"
      >
        <Flex
          w="100%"
          flexGrow="1"
          my={{ base: 4, md: 6, "2xl": 10 }}
          maxW={1600}
          mx="auto"
          px={["2", "4", "6"]}
          justify="center"
        >
          {children}
        </Flex>
        <Footer mt="auto" h="100%" />
      </Flex>
    </Flex>
  );
};
