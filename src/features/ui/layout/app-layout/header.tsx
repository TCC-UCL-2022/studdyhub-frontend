import {
  Box,
  Flex,
  HStack,
  IconButton,
  Tooltip,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProfileMenu } from "@features/account";
import { RiMoonFill, RiSunFill, RiVideoAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

export const Header = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as="header"
        h={["14", "16"]}
        bgColor={useColorModeValue("white", "gray.800")}
        boxShadow="sm"
        transition="0.15s all"
        w="100%"
        position="fixed"
        top={0}
        right={0}
        zIndex={10}
      >
        <Flex
          w="100%"
          maxW={1600}
          mx="auto"
          px={["2", "4", "6"]}
          align="center"
        >
          <Logo />

          <HStack spacing={["2", "4"]} ml="auto">
            <Tooltip label="Trocar tema">
              <IconButton
                aria-label="Trocar tema"
                onClick={toggleColorMode}
                icon={useColorModeValue(<RiSunFill />, <RiMoonFill />)}
                size={useBreakpointValue(["sm", "md"])}
              />
            </Tooltip>
            <Tooltip label="Adicionar curso">
              <IconButton
                as={Link}
                aria-label="Adicionar curso"
                to="/courses/create"
                icon={<RiVideoAddFill />}
                size={useBreakpointValue(["sm", "md"])}
                colorScheme="blue"
              />
            </Tooltip>

            <ProfileMenu />
          </HStack>
        </Flex>
      </Flex>
      <Box bgColor="red" h={["14", "16"]}>
        as
      </Box>
    </>
  );
};
