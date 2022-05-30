import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type MyCoursesLayoutProps = {
  subTitle: string;
  backButton?: boolean;
  backUrl?: string;
};

export const MyCoursesLayout = ({
  children,
  subTitle,
  backButton,

  backUrl,
}: PropsWithChildren<MyCoursesLayoutProps>): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Flex
      w="100%"
      maxW={{ base: "container.md", "2xl": "container.lg" }}
      bgColor={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
      direction="column"
      my="10"
      px="10"
      py="8"
      borderRadius="lg"
      boxShadow="md"
    >
      <HStack>
        {backButton && (
          <Tooltip label="Voltar" placement="top">
            <IconButton
              aria-label="Voltar"
              icon={<Icon as={RiArrowLeftLine} fontSize="24" />}
              variant="ghost"
              onClick={() => navigate(backUrl || (-1 as any))}
            />
          </Tooltip>
        )}
        <Heading size="md">{subTitle}</Heading>
      </HStack>

      {children}
    </Flex>
  );
};
