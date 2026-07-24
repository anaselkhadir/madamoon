import type { NextConfig } from "next";

// Build GitHub Pages : DEPLOY_TARGET=pages npm run build
// (export statique servi sous https://anaselkhadir.github.io/madamoon/)
const isPages = process.env.DEPLOY_TARGET === "pages";

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export" as const,
        basePath: "/madamoon",
        trailingSlash: true,
        images: {
          loader: "custom" as const,
          loaderFile: "./image-loader.ts",
        },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
      }),
};

export default nextConfig;
