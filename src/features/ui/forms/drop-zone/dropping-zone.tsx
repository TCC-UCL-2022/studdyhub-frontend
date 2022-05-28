import { Center, Icon, useColorModeValue } from "@chakra-ui/react";
import { useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { AiFillFileAdd } from "react-icons/ai";

export type DropZoneProps = {
  onChange: (file: File | null) => void;
  accept?: Accept;
};

const defaultAccept: Accept = {
  "video/mkv": [".mkv"],
};

export const DroppingZone = ({
  onChange,
  accept = defaultAccept,
}: DropZoneProps): JSX.Element => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
    multiple: false,
  });

  const dropText = isDragActive
    ? "Arraste o arquivo aqui"
    : "Arraste arquivos aqui, ou clique para selecionar";

  const activeBg = useColorModeValue("gray.100", "gray.600");
  const borderColor = useColorModeValue(
    isDragActive ? "teal.300" : "gray.300",
    isDragActive ? "teal.500" : "gray.500"
  );

  return (
    <Center
      w="100%"
      p={10}
      cursor="pointer"
      bg={isDragActive ? activeBg : "transparent"}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Icon as={AiFillFileAdd} mr={2} />
      <p>{dropText}</p>
    </Center>
  );
};
