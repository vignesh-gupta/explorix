import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import React from "react";

type UploadImageProp = {
  value: string;
  onChange: (value: string | null) => void;
  disabled?: boolean;
};

const UploadImage = ({ value, onChange }: UploadImageProp) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4 mb-4">
      <CldUploadButton
        className="w-full"
        onUpload={(result: any) => {
          console.log(result);
          onChange(result.info.secure_url || null);
        }}
        options={{
          maxFiles: 1,
          resourceType: "image",
          autoMinimize: true,
          clientAllowedFormats: ["png", "gif", "jpeg"],
          maxFileSize: 1000000,
        }}
        uploadPreset="bfamdizv"
      >
        <div className="flex w-full flex-col items-center justify-center p-2 space-y-2 transition border-4 border-dashed rounded-lg border-primary/10 hover:opacity-75">
          <div className="relative w-full h-40">
            <Image
              fill
              alt="Upload"
              src={value ? value : "/cover-placeholder.jpg"}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};

export default UploadImage;
