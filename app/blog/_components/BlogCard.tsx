import { Cover } from "./Cover";

import { cn } from "@/app/lib/utils";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
  cover?: string;
  className?: string;
};

const BlogCard = ({
  title,
  description,
  date,
  tags,
  slug,
  cover,
  className,
}: BlogCardProps) => {
  return (
    <a
      className={cn(
        `w-full p-8 pb-6 bg-[#231F20] text-[#F4F0D6] rounded-xl font-bold hover:bg-[#1e1e25] hover:text-white flex flex-col justify-between gap-8 font-pretendard`,
        className
      )}
      href={`/blog/${slug}`}
    >
      <Cover src={cover ? cover : ""} alt={title} type="default" />
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2.5">
              <div className="text-sm font-bold">{date}</div>
              <div className="text-2xl">{title}</div>
            </div>
            {/* <div className="flex flex-row flex-wrap gap-1.5">
              {tags?.map((tag) => (
                <TagButton key={tag} tag={tag} />
              ))}
            </div> */}
          </div>
          <div className="font-medium text-base">{description}</div>
        </div>
        <div className="text-sm text-[#FCBA29] font-black self-end">
          읽으러 가기
        </div>
      </div>
    </a>
  );
};

const TagButton = ({ tag }: { tag: string }) => {
  return (
    <button className=" py-0.5 px-[7px] rounded-lg border-[1px] border-[#F4F0D6] text-white font-semibold text-base">
      {tag}
    </button>
  );
};

export { BlogCard };
