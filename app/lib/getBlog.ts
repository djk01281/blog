import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

const getBlogBySlug = async (slug: string) => {
  const filePath = path.join(process.cwd(), `app/blog/mdx/${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const res = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: res,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    frontmatter,
    content,
  };
};

const getAllBlogs = async () => {
  const filePath = path.join(process.cwd(), `app/blog/mdx`);
  const files = fs.readdirSync(filePath);

  const blogs = [];
  for (const file of files) {
    const res = fs.readFileSync(path.join(filePath, file), "utf8");
    const { frontmatter } = await compileMDX<{
      title: string;
      description: string;
    }>({
      source: res,
      options: {
        parseFrontmatter: true,
      },
    });

    blogs.push(frontmatter);
  }

  return blogs;
};

export { getBlogBySlug, getAllBlogs };
