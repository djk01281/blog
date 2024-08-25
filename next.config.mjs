import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // image
  images: {
    domains: ["velog.velcdn.com"],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  remarkPlugins: [],
  rehypePlugins: [],
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
