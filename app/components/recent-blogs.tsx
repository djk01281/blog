// "use server";
import { getAllBlogs } from "../lib/getBlog";
import { BlogCard } from "../blog/_components/BlogCard";

export default async function RecentBlogs() {
  const blogs = await getAllBlogs();

  return (
    <div className="w-full flex flex-col gap-6 ">
      <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12 ">
        {blogs.slice(0, 2).map((blog, index) =>
          BlogCard({
            title: blog.title,
            description: blog.description,
            date: blog.date,
            tags: blog.tags,
            slug: blog.slug,
            cover: blog.cover,
            className: `${index === 1 ? "hidden sm:flex" : ""} rounded-2xl`,
          })
        )}
      </div>
    </div>
  );
}
