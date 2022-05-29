import { IActivity } from "@/services/activities";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ActivityDetails } from "./activity-details.component";

export type ActivityDetailsModalProps = {
  activity: IActivity;
  modalProps: Omit<ReturnType<typeof useDisclosure>, "onOpen">;
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
          <ActivityDetails activity={activity} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
