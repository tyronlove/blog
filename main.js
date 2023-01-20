import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Tyron's Blog",
  description: "Proud Dad. Lover of one exquisite human. Cartoonist for pretend.",
  showHeaderOnPostPage: true,
  author: "Tyron Love",
  avatar: "/images/profile.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:tyronlove@duck.com" },
    { title: "Twitter", url: "https://twitter.com/tyron_love" },
    { title: "Instagram", url: "https://www.instagram.com/tyronlove/" },
  ],
  background: "#fff",
 middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "rant.html": "rant",
    }),
  ],
  lang: "en",
  favicon: "favicon.ico",
  ogImage: {
    url: "/images/profile.png",
    twitterCard:  "summary_large_image" 
  },
  style:".text-lg {text-align: center!important;}"
});
