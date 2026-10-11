import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep file tracing pinned to this project (stray lockfiles in parent
  // directories can otherwise make Next infer the wrong workspace root).
  outputFileTracingRoot: path.resolve(),

  images: {
    unoptimized: true,
  },

  // All images are served locally from /public — no remote loaders needed.
  // URL routes intentionally mirror the current WordPress site
  // (toshakancillary.com) so existing search rankings carry over.
};

export default nextConfig;
