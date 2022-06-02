import { IconButton, IconButtonProps, useDisclosure } from "@chakra-ui/react";
import { forwardRef } from "react";
import { SearchBarModal } from "./search-bar-modal";

export const SearchBarModalButton = forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(({ onClick, ...props }, ref): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton {...props} onClick={onOpen} ref={ref} />

      <SearchBarModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
