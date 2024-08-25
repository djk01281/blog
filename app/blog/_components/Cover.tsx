// "use client";

// import Image from "next/image";
// import { ImageProps } from "next/image";

// interface ImageCardProps extends ImageProps {
//   type: "default" | "mac";
// }

// const Cover = ({ type = "default", ...props }: ImageCardProps) => {
//   return (
//     <div className="w-full overflow-hidden relative">
//       <Image
//         {...(props as ImageProps)}
//         alt={props.alt}
//         className="rounded-lg m-0"
//         width={0}
//         height={0}
//         style={{
//           width: "100%",
//           height: "auto",
//         }}
//         sizes={"100vw"}
//       />
//     </div>
//   );
// };

// export { Cover };

"use client";

import Image from "next/image";
import { ImageProps } from "next/image";

interface ImageCardProps extends ImageProps {
  type: "default" | "mac";
}

const Cover = ({ type = "default", ...props }: ImageCardProps) => {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{ aspectRatio: "16 / 9" }} // Using aspect-ratio CSS property
    >
      <Image
        {...(props as ImageProps)}
        alt={props.alt}
        className="rounded-lg m-0 object-cover"
        fill
        sizes={"100vw"}
      />
    </div>
  );
};

export { Cover };
