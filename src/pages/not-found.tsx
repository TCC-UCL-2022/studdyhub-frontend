import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Center w="100%" h="100vh" bgColor="Background">
      <VStack justify="center">
        <Heading size="3xl">404</Heading>
        <Heading size="2xl">Página não encontrada!</Heading>

        <Button variant="outline" onClick={() => navigate(-1)}>
          Página anterior
        </Button>
        <Button as={Link} variant="solid" to="/">
          Página inicial
        </Button>
      </VStack>
    </Center>
  );
};
