import {
  Button,
  HStack,
  Icon,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { RiCloseCircleFill, RiFileAddFill } from "react-icons/ri";

type FileUploadedProps = {
  fileKey: string;
  handleCancelUpload: () => void;
  thumbnail?: string | null;
};

export const FileUploaded = ({
  fileKey,
  handleCancelUpload,
  thumbnail,
}: FileUploadedProps): JSX.Element => {
  return (
    <VStack alignItems="flex-start">
      {thumbnail && (
        <Image maxH="56" src={thumbnail} alt="thumbnail" borderRadius="md" />
      )}
      <HStack>
        <HStack
          py="2"
          px="4"
          bgColor={useColorModeValue("gray.100", "gray.600")}
          borderRadius="md"
        >
          <Icon as={RiFileAddFill} size="2x" />
          <p>{fileKey?.split("/")[1]}</p>
        </HStack>
        <Button
          colorScheme="red"
          rightIcon={<RiCloseCircleFill />}
          onClick={handleCancelUpload}
        >
          Cancelar upload
        </Button>
      </HStack>
    </VStack>
  );
};
