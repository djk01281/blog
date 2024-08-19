import Hello from "./mdx/hello.mdx";
import { getAllBlogs } from "../lib/getBlog";

export default async function Page() {
  const blogs = await getAllBlogs();
  return (
    <div className="prose">
      {blogs.map((blog) => (
        <div key={blog.title}>
          {/* <a href={`${blog.title}`}`>{blog.title}</a> */}
          <a href={`/blog/${blog.slug}`}>{blog.title}</a>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
