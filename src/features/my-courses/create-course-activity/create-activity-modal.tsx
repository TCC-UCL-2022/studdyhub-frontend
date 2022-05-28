import { IActivity } from "@/services/activities";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CreateActivityForm } from "./create-activity-form";

export type CreateActivityModalProps = {
  activityToEdit?: IActivity;
  modalProps: Omit<ReturnType<typeof useDisclosure>, "onOpen">;
};

export const CreateActivityModal = ({
  modalProps,
  activityToEdit,
}: CreateActivityModalProps): JSX.Element => {
  const { isOpen, onClose } = modalProps;

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside" size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Criar atividade</ModalHeader>

        <ModalCloseButton />
        <ModalBody color={useColorModeValue("gray.800", "gray.200")} pb="6">
          <CreateActivityForm
            activityToEdit={activityToEdit}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
