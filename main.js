import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Tyron's Blog",
  description: "Proud Dad. Lover of one exquisite human. Cartoonist for pretend.",
  author: "Tyron Love",
  avatar: "/images/profile.png",
  avatarClass: "full",
  links: [
    { title: "Mastodon", url: "https://techhub.social/@tyronlove" },
    { title: "Instagram", url: "https://www.instagram.com/tyronlove/" },
    { title: "Github", url: "https://github.com/tyronlove" },
  ],
  background: "#fff",
  middlewares: [
    redirects({
      "rant.html": "rant",
    }),
  ],
  lang: "en",
  favicon: "favicon.ico",
  ogImage: {
    url: "/images/profile.png",
    twitterCard:  "/images/profile.png" 
  },
  style:".text-lg {text-align: center!important;} ol, ul, menu {list-style: square!important;}"
});