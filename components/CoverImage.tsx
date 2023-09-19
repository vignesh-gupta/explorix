import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import React from "react";

type CoverImageProp = {
  value: string;
  disabled?: boolean;
};

const CoverImage = ({ value }: CoverImageProp) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4 mb-4">
      <div className="flex w-full flex-col items-center justify-center p-2 space-y-2 transition rounded-lg border-primary/10">
        <div className="relative w-full h-40">
          <Image
            fill
            alt="Upload"
            src={value ? value : "/cover-placeholder.jpg"}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
