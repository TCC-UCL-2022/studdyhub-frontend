import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { SearchBar } from "./search-bar.component";

type SearchBarModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchBarModal = ({
  isOpen,
  onClose,
}: SearchBarModalProps): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <SearchBar onSearch={onClose} variant="unstyled" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
