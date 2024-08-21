import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { storage } from "../database/firebase";

type Props = {
    upload: any,
    setUpload: any
}

const Uploader:React.FC<Props> = ({upload, setUpload}) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100000,

    onDrop: (acceptedFiles: { name: any; }[]) => {
        console.log(acceptedFiles[0]);
        const file: any = acceptedFiles[0];
        console.log(15,file.name);
        console.log(16, upload);

        if (file) {
            console.log(file.name);
         const storageRef = ref(storage, `images/${file.name}`);
         console.log("storageRef", storageRef);
         const uploadTask = uploadBytesResumable(storageRef, file);
         console.log("uploadTask", uploadTask);

         uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error: any) => {
                // Handle unsuccessful uploads
                console.error('Upload failed:', error);
              },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setUpload({...upload, image: downloadURL});
              });
            }
         );
        }
        else {
            console.log("No file selected");
        }
        console.log(17, upload);
    },
  });
  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-grab"
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex-colo text-subMain text-3xl">
          <FiUploadCloud />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
        <em className="text-xs text-border ">
          (only .jpg ang .png files willbe accepted)
        </em>
      </div>
    </div>
  );
};

export default Uploader;
