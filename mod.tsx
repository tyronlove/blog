
import blog, {
  h,
  highlight,
  imageContainer,
  redirects,
} from "https://deno.land/x/vixalien_deno_blog@0.4.14/blog.tsx";

blog({
  author: "Tyron Love",
  title: "Tyron's Blog",
  avatar: "/images/profile.png",
  avatarClass: "full",
  dateStyle: "medium",
  links: [
    { title: "GitHub", url: "https://github.com/tyronlove" },
    { title: "Twitter", url: "https://twitter.com/tyron_love" },
    { title: "Instagram", url: "https://www.instagram.com/tyronlove/" },
  ],
  canonicalUrl: Deno.env.get("URL"),
  description:
  "Proud Dad. Lover of one exquisite human. Cartoonist for pretend.",
  middlewares: [
    await highlight(),
    await imageContainer(),
    redirects({
      "/feed/feed.rss": "/feed",
      "/blog": "/",
    }),
  ],
  lang: "en",
  favicon: "favicon.ico",
  ogImage: {
    url: "/images/profile.png",
    twitterCard:  "/images/profile.png" 
  },
  style:".text-lg {text-align: center!important;} ol, ul, menu {list-style: square!important;} .text-bluegray-500 { font-weight: 400;!important;}"
});
