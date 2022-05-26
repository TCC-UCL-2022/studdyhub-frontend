import { ActivityType, IActivity } from "@/services/activities";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export type ActivityDetailsModalProps = {
  activity: IActivity;
  modalProps: Omit<ReturnType<typeof useDisclosure>, "onOpen">;
};

const activityTypeToLabel = {
  [ActivityType.ARTICLE]: "Artigo",
  [ActivityType.VIDEO]: "Vídeo",
  [ActivityType.EXERCISE]: "Exercício",
};

const getActivityContent = (activity: IActivity) => {
  const map = {
    [ActivityType.ARTICLE]: <Text>{activity.content}</Text>,
    [ActivityType.VIDEO]: <Text>{activity.content}</Text>,
    [ActivityType.EXERCISE]: <Text>{activity.content}</Text>,
  };

  return map[activity.type];
};

export const ActivityDetailsModal = ({
  activity,
  modalProps,
}: ActivityDetailsModalProps): JSX.Element => {
  const { isOpen, onClose } = modalProps;

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalhes da Atividade</ModalHeader>

        <ModalCloseButton />
        <ModalBody color={useColorModeValue("gray.800", "gray.200")}>
          <VStack w="100%" align="flex-start">
            <HStack>
              <Text fontWeight="semibold">Titulo: </Text>
              <Text>{activity.title}</Text>
            </HStack>

            <HStack>
              <Text fontWeight="semibold">Tipo: </Text>
              <Text>{activityTypeToLabel[activity.type]}</Text>
            </HStack>

            <Text fontWeight="semibold">Conteudo: </Text>

            {getActivityContent(activity)}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
