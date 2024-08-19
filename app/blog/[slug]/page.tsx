import { getBlogBySlug } from "@/app/lib/getBlog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Counter } from "../_components/example";

type ArtilcePageProps = {
  params: {
    slug: string;
  };
};

// type Frontmatter = {
//   title: string;
//   components: string[];
//   description: string;
// };

const components = {
  Counter,
};

export default async function ArticlePage({ params }: ArtilcePageProps) {
  const { content, frontMatter } = await getBlogBySlug(params.slug);
  //   const mdxSource = await serialize(content, {
  //     parseFrontmatter: true,
  //   });

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className=" text-[#f38ba3]  flex-col flex">
        <span className="font-bold text-2xl">{frontMatter["title"]}</span>
        <span>{frontMatter["description"]}</span>
      </div>
      <div className="prose prose-pink bg-[#1e1e25] rounded-lg w-full p-6 ">
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
}

// import { getBlogBySlug } from "@/app/lib/getBlog";
// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote/rsc";

// type ArticlePageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default async function ArticlePage({ params }: ArticlePageProps) {
//   // Get the raw MDX content
//   const source = await getBlogBySlug(params.slug);

//   // Serialize the content and parse the front matter
//   const mdxSource = await serialize(source, {
//     parseFrontmatter: true,
//   });

//   // Extract components from front matter
//   const frontMatter = mdxSource.frontmatter as { components?: string[] };
//   const componentNames = Array.isArray(frontMatter.components)
//     ? frontMatter.components
//     : [];

//   // Dynamically import the components mentioned in the front matter
//   const importedComponents = await Promise.all(
//     componentNames.map(async (componentName) => {
//       try {
//         const componentModule = await import(
//           `../_components/${componentName}.tsx`
//         );
//         return { [componentName]: componentModule[componentName] };
//       } catch (error) {
//         console.error(`Failed to load component: ${componentName}`, error);
//         return null;
//       }
//     })
//   );

//   // Combine imported components into a single object, filtering out any nulls
//   const componentMap = Object.assign({}, ...importedComponents.filter(Boolean));

//   return (
//     <div className="prose">
//       <MDXRemote source={mdxSource} components={componentMap} />
//     </div>
//   );
// }
