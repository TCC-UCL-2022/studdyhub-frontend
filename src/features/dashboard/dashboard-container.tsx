import { Roles } from "@/enums";
import {
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useAuthenticationContext } from "../authentication";
import { DashboardGuest } from "./dashboard-guest";
import { DashboardStudent } from "./dashboard-student";
import { DashboardTeacher } from "./dashboard-teacher";

export const DashboardContainer = (): JSX.Element => {
  const { user } = useAuthenticationContext();

  return (
    <Container maxW="container.lg" padding="6">
      <VStack align="start" w="100%" spacing="4">
        <Heading as="h1" color={useColorModeValue("gray.700", "gray.200")}>
          Página inicial
        </Heading>

        {user?.role === Roles.STUDENT && <DashboardStudent />}

        {user?.role === Roles.TEACHER && <DashboardTeacher />}

        {!user && <DashboardGuest />}
      </VStack>
    </Container>
  );
};
