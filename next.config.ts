import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  images: {
    // Google Business Profile reviewer avatars and location photos.
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "streetviewpixels-pa.googleapis.com" },
      // Mux poster thumbnails for guest video reviews (next-video).
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
};

// withNextVideo wires up the Turbopack + webpack loaders that turn imports of
// `@videos/*.mp4` into Mux-backed sources. Run `bun run video:sync` to upload
// source files placed in /videos to Mux.
export default withNextVideo(nextConfig);
