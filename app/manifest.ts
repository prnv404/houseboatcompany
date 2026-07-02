import type { MetadataRoute } from "next";
import { SITE_NAME, BRAND } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND,
    short_name: SITE_NAME,
    description:
      "Book luxury houseboat cruises through the Alleppey backwaters of Kerala.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0369a1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
