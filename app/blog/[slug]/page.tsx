import { getBlogBySlug } from "@/app/lib/getBlog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Counter } from "../_components/example";
import { MDXComponents } from "mdx/types";
import { ImageCard } from "../_components/ImageCard";
import { Cover } from "../_components/Cover";

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
  ImageCard,
};

function customH1({ children }: { children: string }) {
  return <h1 className="text-3xl text-[#fcba29]">{children}</h1>;
}

function customP({ children }: { children: string }) {
  return <p style={{ margin: 0 }}>{children}</p>;
}

function customH3({ children }: { children: string }) {
  return <h3 className="my-3">{children}</h3>;
}

const overrideComponents = {
  p: customP,
  h1: customH1,
  h3: customH3,
};

export default async function ArticlePage({ params }: ArtilcePageProps) {
  const { content, frontMatter } = await getBlogBySlug(params.slug);
  //   const mdxSource = await serialize(content, {
  //     parseFrontmatter: true,
  //   });

  return (
    <div className="w-full flex flex-col items-center gap-8 text-[#f9f4da] ">
      <div className="flex-col flex items-center gap-2">
        <span className="text-[#f38ba3] font-extrabold text-3xl md:text-5xl">
          {frontMatter["title"]}
        </span>
        <span>{frontMatter["description"]}</span>
      </div>
      <Cover src={frontMatter.cover} alt="cover" type="default"></Cover>
      <div className="prose prose-pink rounded-lg w-full p-6  flex flex-col gap-2.5 text-[#fcf3e3]">
        <MDXRemote
          source={content}
          components={
            {
              ...components,
              ...overrideComponents,
            } as MDXComponents
          }
        />
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
