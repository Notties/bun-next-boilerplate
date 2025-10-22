import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  options: {
    // Use string plugin specifiers for Turbopack serializability
    remarkPlugins: ["remark-frontmatter"],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  // Ensure static export remains enabled
  output: "export",
  // Allow MDX files to be treated as pages/components
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withNextIntl(withMDX(nextConfig));
