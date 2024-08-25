import Hello from "./mdx/hello.mdx";
import { getAllBlogs } from "../lib/getBlog";
import { BlogCard } from "./_components/BlogCard";

export default async function Page() {
  const blogs = await getAllBlogs();
  return (
    <div className="w-full flex flex-col gap-6 px-8">
      <div className="font-bricolage font-extrabold text-[#f9f4da] text-4xl flex justify-center mt-8">
        Articles
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) =>
          BlogCard({
            title: blog.title,
            description: blog.description,
            date: blog.date,
            tags: blog.tags,
            slug: blog.slug,
            cover: blog.cover,
          })
        )}
      </div>
    </div>
  );
}
