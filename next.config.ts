import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Google Business Profile reviewer avatars and location photos.
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "streetviewpixels-pa.googleapis.com" },
    ],
  },
};

export default nextConfig;
