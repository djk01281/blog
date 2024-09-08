import Image from "next/image";

export default function TechStack() {
  return (
    <div className="flex flex-row w-full justify-center gap-24 bg-inherit">
      <Image
        src="/teckstackBag.avif"
        width={497}
        height={521}
        alt="
        techstackBag"
        priority
        loading="eager"
      />
    </div>
  );
}
