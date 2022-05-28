import { IActivity } from "@/services/activities";
import {
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
import { useRef } from "react";
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
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside" size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Criar atividade</ModalHeader>

        <ModalCloseButton />
        <ModalBody color={useColorModeValue("gray.800", "gray.200")}>
          <CreateActivityForm
            activityToEdit={activityToEdit}
            onClose={onClose}
            modalFooterRef={footerRef}
          />
        </ModalBody>

        <ModalFooter ref={footerRef} />
      </ModalContent>
    </Modal>
  );
};
