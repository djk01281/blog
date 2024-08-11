import Hello from "./mdx/hello.mdx";
import { getAllBlogs } from "../lib/getBlog";

export default async function Page() {
  const blogs = await getAllBlogs();
  return (
    <div className="prose">
      {blogs.map((blog) => (
        <div key={blog.title}>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
