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
      direction="column"
      h="100vh"
      overflow="hidden"
      bgColor={useColorModeValue("gray.100", "gray.900")}
      transition="0.15s all"
      align="center"
      w="100%"
    >
      <Header />
      <Flex
        w="100%"
        my="2"
        maxW={1600}
        mx="auto"
        px={["2", "4", "6"]}
        overflow="hidden"
        height="100%"
        justify="center"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
