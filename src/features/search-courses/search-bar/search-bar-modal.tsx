import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchBar } from "./search-bar.component";

type SearchBarModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchBarModal = ({
  isOpen,
  onClose,
}: SearchBarModalProps): JSX.Element => {
  const modalSize = useBreakpointValue({
    base: "full",
    sm: "md",
    md: "lg",
    lg: "xl",
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <SearchBar onSearch={onClose} variant="unstyled" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
