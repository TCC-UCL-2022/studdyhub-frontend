import { FileUploaded, FileUploader } from "@/features/ui/forms";
import { Flex } from "@chakra-ui/react";
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";
import { Storage } from "aws-amplify";
import { useCallback, useState } from "react";

type CreateVideoActivityProps = {
  value: string;
  onChange: (value: string) => void;
};

export const CreateVideoActivity = ({
  onChange,
  value,
}: CreateVideoActivityProps): JSX.Element => {
  const [key, setKey] = useState<string | null>(value);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleOnUploaded = useCallback(
    (value: string) => {
      setKey(value);
      onChange(value);
    },
    [onChange]
  );

  const handleCancelUpload = useCallback(async () => {
    if (key) {
      await Storage.remove(key, {
        level: "public",
      });
      setKey(null);
    }
  }, [key]);

  const handleOnSelected = useCallback(async (file: File | null) => {
    if (file) {
      const thumbnails = await generateVideoThumbnails(file, 1, "file");
      setThumbnail(thumbnails[0] ?? null);
    }
  }, []);

  return (
    <Flex w="100%">
      {!key && (
        <FileUploader
          onUploaded={handleOnUploaded}
          onSelected={handleOnSelected}
        />
      )}
      {key && (
        <FileUploaded
          fileKey={key}
          thumbnail={thumbnail}
          handleCancelUpload={handleCancelUpload}
        />
      )}
    </Flex>
  );
};
