import { logos } from "@assets";
import {
  Flex,
  HStack,
  IconButton,
  Image,
  Tooltip,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProfileMenu } from "@features/account";
import { RiMoonFill, RiSunFill, RiVideoAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const AppLayoutHeader = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      h={["16", "20"]}
      bgColor={useColorModeValue("white", "gray.800")}
      boxShadow="sm"
      transition="0.15s all"
    >
      <Flex w="100%" maxW={1600} mx="auto" px={["2", "4", "6"]} align="center">
        <Link to="/">
          <Image
            w="40"
            transition="all ease 0.2s"
            src={useColorModeValue(logos.dark, logos.light)}
          />
        </Link>

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
              to="/courses/new"
              icon={<RiVideoAddFill />}
              size={useBreakpointValue(["sm", "md"])}
              colorScheme="blue"
            />
          </Tooltip>

          <ProfileMenu />
        </HStack>
      </Flex>
    </Flex>
  );
};
