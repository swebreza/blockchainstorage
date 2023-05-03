import { useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import Image from "next/image";

import styles from "../../styles/FileUploader.module.css";

const FileUploader = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.fileUploader} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
      <div className={styles.fileList}>
        {files.map((file) => (
          <div key={file.name}>
            <div>
              {/* <Image src={file} alt={file.name} /> */}
            </div>
            <div>{file.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
