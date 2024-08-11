import { getBlogBySlug } from "@/app/lib/getBlog";

type ArtilcePageProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArtilcePageProps) {
  const { frontmatter, content } = await getBlogBySlug(params.slug);
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <div className="prose">{content}</div>;
    </>
  );
}
