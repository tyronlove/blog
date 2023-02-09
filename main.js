import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Tyron's Blog",
  description: "Proud Dad. Lover of one exquisite human. Cartoonist for pretend.",
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

import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 80 });

for await (const req of server) {
  if (req.headers.get("host").startsWith("tyronlove.com")) {
    req.respond({
      status: 301,
      headers: new Headers({
        "location": `http://www.tyronlove.com${req.url}`,
      }),
    });
  } else {
    req.respond({
      body: "Hello World\n",
    });
  }
}