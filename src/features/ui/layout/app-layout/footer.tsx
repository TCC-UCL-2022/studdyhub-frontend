import {
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiGithubFill } from "react-icons/ri";

export const Footer = (): JSX.Element => (
  <Flex
    as="footer"
    role="contentinfo"
    w="100%"
    maxW={1600}
    mx="auto"
    px={["2", "4", "6"]}
    py={{ base: "1", md: "2" }}
    bgColor={useColorModeValue("white", "gray.800")}
    boxShadow="sm"
    transition="0.15s all"
    color="gray.600"
  >
    <Stack spacing="0.5" w="100%">
      <Stack justify="space-between" direction="row" align="center">
        <Text fontSize="lg">Studdyhub</Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as={Link}
            isExternal
            href="https://github.com/TCC-UCL-2022"
            aria-label="GitHub"
            icon={<RiGithubFill fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Studdyhub, Inc. All rights reserved.
      </Text>
    </Stack>
  </Flex>
);
