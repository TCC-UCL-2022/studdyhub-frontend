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
import { PropsWithChildren } from "react";

type EditCourseModalProps = Pick<
  ReturnType<typeof useDisclosure>,
  "isOpen" | "onClose"
>;

export const EditCourseModal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<EditCourseModalProps>): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar curso</ModalHeader>

        <ModalCloseButton />
        <ModalBody color={useColorModeValue("gray.800", "gray.200")}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
