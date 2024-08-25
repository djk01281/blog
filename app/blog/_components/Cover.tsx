"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageProps } from "next/image";

interface ImageCardProps extends ImageProps {
  type: "default" | "mac";
}

const Cover = ({ type = "default", ...props }: ImageCardProps) => {
  const [ratio, setRatio] = useState(16 / 9);

  return (
    <Image
      {...(props as ImageProps)}
      width={500}
      height={500 / ratio}
      alt={props.alt}
      className="rounded-md m-0"
      onLoadingComplete={({ naturalHeight, naturalWidth }) => {
        setRatio(naturalWidth / naturalHeight);
      }}
    />
  );
};

export { Cover };
