import { Button, Progress, VStack } from "@chakra-ui/react";
import { Storage } from "aws-amplify";
import { useCallback, useState } from "react";
import { Accept } from "react-dropzone";
import { RiUploadCloudFill } from "react-icons/ri";
import { DroppingZone } from "../drop-zone";
import { FileItem } from "./file-item";

export type UploadTask = {
  resume(): any;
  pause(): any;
  percent: number;
  isInProgress: boolean;
};

type FileUploaderProps = {
  onUploaded: (value: string) => void;
  accept?: Accept;
};

export const FileUploader = ({
  onUploaded,
  accept,
}: FileUploaderProps): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = useCallback(() => {
    if (file) {
      setUploading(true);

      Storage.put(file.name, file, {
        level: "public",
        contentType: file.type,
        resumable: true,
        errorCallback: (err) => {
          setUploading(false);
        },
        progressCallback: (progress) => {
          setUploadProgress(progress.loaded / progress.total);
        },
        completeCallback: (result) => {
          setUploading(false);
          onUploaded(result.key);
        },
      });
    }
  }, [file, onUploaded]);

  return (
    <VStack w="100%" alignItems="flex-start" spacing="4">
      {!file && <DroppingZone onChange={setFile} accept={accept} />}
      {file && (
        <FileItem file={file} onRemove={setFile} uploading={uploading} />
      )}

      {!uploading && (
        <Button
          disabled={!file}
          rightIcon={<RiUploadCloudFill />}
          onClick={handleUpload}
        >
          Fazer upload
        </Button>
      )}
      {uploading && (
        <Progress
          w="100%"
          borderRadius="md"
          hasStripe
          value={uploadProgress * 100}
          min={0}
          max={100}
        />
      )}
    </VStack>
  );
};
