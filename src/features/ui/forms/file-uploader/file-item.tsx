import {
  HStack,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { RiDeleteBin2Fill, RiFileAddFill } from "react-icons/ri";

type FileItemProps = {
  file: File;
  onRemove: (file: null) => void;
  uploading?: boolean;
};

export const FileItem = ({
  file,
  onRemove,
  uploading,
}: FileItemProps): JSX.Element => {
  const handleRemove = useCallback(() => {
    onRemove(null);
  }, [onRemove]);

  return (
    <HStack
      py="2"
      px="4"
      bgColor={useColorModeValue("gray.100", "gray.600")}
      borderRadius="md"
    >
      <Icon as={RiFileAddFill} size="2x" />
      <p>{file.name}</p>
      <Tooltip label="Remover arquivo">
        <IconButton
          aria-label="Remover arquivo"
          icon={
            <Icon
              color={useColorModeValue("white", "black")}
              as={RiDeleteBin2Fill}
            />
          }
          size="sm"
          colorScheme="red"
          onClick={handleRemove}
          disabled={uploading}
        />
      </Tooltip>
    </HStack>
  );
};
