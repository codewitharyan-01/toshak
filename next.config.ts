import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep file tracing pinned to this project locally, allow Vercel to manage root automatically
  outputFileTracingRoot: process.env.VERCEL ? undefined : path.resolve(),

  images: {
    unoptimized: true,
  },

  // All images are served locally from /public — no remote loaders needed.
  // URL routes intentionally mirror the current WordPress site
  // (toshakancillary.com) so existing search rankings carry over.
};

export default nextConfig;
