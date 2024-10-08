import { cn } from "@/app/lib/utils";

const MaxWidthWrapper = (
  props: React.PropsWithChildren<{
    children: React.ReactNode;
    className?: string;
  }>
) => {
  return (
    <div className={cn("lg:max-w-5xl w-full mx-auto", props.className)}>
      {props.children}
    </div>
  );
};

export { MaxWidthWrapper };
