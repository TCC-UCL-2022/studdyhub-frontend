import { ProfileMenu } from "@/features/account";
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
import { RiMoonFill, RiSunFill, RiVideoAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

type HeaderProps = {
  hideOptions?: boolean;
};

export const Header = ({ hideOptions }: HeaderProps): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const toggleThemeIcon = useColorModeValue(<RiSunFill />, <RiMoonFill />);
  const iconsSize = useBreakpointValue(["sm", "md"]);

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

          {!hideOptions && (
            <HStack spacing={["2", "4"]} ml="auto">
              <Tooltip label="Trocar tema">
                <IconButton
                  aria-label="Trocar tema"
                  onClick={toggleColorMode}
                  icon={toggleThemeIcon}
                  size={iconsSize}
                />
              </Tooltip>
              <Tooltip label="Adicionar curso">
                <IconButton
                  as={Link}
                  aria-label="Adicionar curso"
                  to="/courses/create"
                  icon={<RiVideoAddFill />}
                  size={iconsSize}
                  colorScheme="blue"
                />
              </Tooltip>

              <ProfileMenu />
            </HStack>
          )}
        </Flex>
      </Flex>
      <Box bgColor="red" h={["14", "16"]}>
        as
      </Box>
    </>
  );
};
