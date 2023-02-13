import blog, {} from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Tyron's Blog",
  description: "Proud Dad. Lover of one exquisite human. Cartoonist for pretend.",
  author: "Tyron Love",
  avatar: "/images/profile.png",
  avatarClass: "full",
  links: [
    { title: "Twitter", url: "https://twitter.com/tyron_love" },
    { title: "Instagram", url: "https://www.instagram.com/tyronlove/" },
    { title: "Github", url: "https://github.com/tyronlove" },
  ],
  lang: "en",
  canonicalUrl: "https://www.tyronlove.com/",
  favicon: "favicon.ico",
  ogImage: {
    url: "/images/profile.png",
    twitterCard:  "/images/profile.png" 
  },
  style:".text-lg {text-align: center!important;} ol, ul, menu {list-style: square!important;} .text-bluegray-500 { font-weight: 400;!important;}"
});