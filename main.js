import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Tyron's Blog",
  description: "Hi! I'm Tyron. Proud Dad, lover of one exquisite human, cartoonist for pretend.",
  author: "Tyron Love",
  avatar: "https://pbs.twimg.com/profile_images/1495138432959537156/1Z9AKCI4_400x400.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:tyronlove@duck.com" },
    { title: "Twitter", url: "https://twitter.com/tyron_love" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
