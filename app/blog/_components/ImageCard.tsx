"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageProps } from "next/image";

interface ImageCardProps extends ImageProps {
  type: "default" | "mac";
}

const ImageCard = ({ type = "default", ...props }: ImageCardProps) => {
  const [ratio, setRatio] = useState(16 / 9);

  return (
    <div
      className={`bg-[#231f20] rounded-lg ${
        type === "mac" ? "p-0 gap-0 pb-3 pt-1.5" : "p-6 pb-3 gap-3"
      } max-w-lg self-center flex flex-col `}
    >
      <Image
        {...(props as ImageProps)}
        width={500}
        height={500 / ratio}
        alt={props.alt}
        className="rounded-md m-0 "
        sizes="500px"
        onLoadingComplete={({ naturalHeight, naturalWidth }) => {
          setRatio(naturalWidth / naturalHeight);
        }}
      />
      <div className="text-sm italic w-full flex items-center justify-center">
        {props.alt}
      </div>
    </div>
  );
};

export { ImageCard };
