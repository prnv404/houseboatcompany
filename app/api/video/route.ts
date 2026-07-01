// Lets <Video> accept remote string sources, e.g.
//   <Video src="https://cdn.example.com/clip.mp4" />
// next-video proxies/processes the URL through this handler (and Mux) instead of
// requiring a local file in /videos. Local `@videos/*` imports don't need it.
export { GET } from "next-video/request-handler";
