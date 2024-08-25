// "use server";
import { getAllBlogs } from "../lib/getBlog";
import { BlogCard } from "../blog/_components/BlogCard";

export default async function RecentBlogs() {
  const blogs = await getAllBlogs();

  return (
    <div className="w-full flex flex-col gap-6 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
        {blogs.map(
          (blog, index) =>
            index < 2 &&
            BlogCard({
              title: blog.title,
              description: blog.description,
              date: blog.date,
              tags: blog.tags,
              slug: blog.slug,
              cover: blog.cover,
              className: "bg-[#2d2929] rounded-2xl ",
            })
        )}
      </div>
    </div>
  );
}
