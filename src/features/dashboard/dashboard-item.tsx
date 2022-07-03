import {
  Button,
  ButtonProps,
  Image,
  Text,
  useColorModeValue,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

type DashboardItemProps = Omit<ButtonProps, "children"> & {
  image: string;
  title: string;
  to: string;
};

export const DashboardItem = forwardRef<HTMLButtonElement, DashboardItemProps>(
  ({ image, title, ...props }, ref) => (
    <WrapItem
      maxW="sm"
      w="100%"
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="lg"
    >
      <Button
        ref={ref}
        as={Link}
        h="100%"
        w="100%"
        py="4"
        colorScheme="blue"
        variant="outline"
        {...props}
      >
        <VStack spacing="4">
          <Image src={image} alt={title} height="40" />
          <Text>{title}</Text>
        </VStack>
      </Button>
    </WrapItem>
  )
);
