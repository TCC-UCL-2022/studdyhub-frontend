import { Flex } from "@chakra-ui/react";
import { useTitle } from "./use-title";

type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const AppLayout = ({ children, title }: AppLayoutProps): JSX.Element => {
  useTitle(title);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      w="100%"
      maxW={1480}
      px={4}
    >
      {children}
    </Flex>
  );
};
