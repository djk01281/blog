"use server";
import fs from "fs";
import path from "path";
// import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const getBlogBySlug = async (slug: string) => {
  const filePath = path.join(process.cwd(), `app/blog/mdx/${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const res = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(res);
  return {
    content,
    frontMatter: data,
  };
};

const getAllBlogs = async () => {
  const filePath = path.join(process.cwd(), `app/blog/mdx`);
  const files = fs.readdirSync(filePath);

  const blogs = [];
  for await (const file of files) {
    const res = fs.readFileSync(path.join(filePath, file), "utf8");
    const { data } = matter(res);
    data.slug = file.replace(".mdx", "");
    blogs.push(data);
  }

  return blogs;
};

export { getBlogBySlug, getAllBlogs };
