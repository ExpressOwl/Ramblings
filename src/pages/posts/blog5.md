---
layout: "../../layouts/BlogPost.astro"
title: Updating Website for client
date: 2023-02-21
tags: ["Tailwind CSS", "Flowbite", "Vite"]
---

Upgrading my client's website to look more modern using customizable components from Flowbite was interesting.
Making the general layout was quick and since the components are responsive and Tailwind CSS is made for mobile first, slotting in and out different looks per the client's request was easy.

Deploying the site on the other hand was another challenge. In my previous blog about deploying the portfolio site I learnt about using the custom domain name via DNS or proxy between Cloudflare and Vercel. However, whenever I ran NPM run build my other html files apart from index would not output into the dist. After looking around an hour I found out from this page, https://vitejs.dev/guide/build.html , that I needed to follow the Multi-Page App structure and use a specific vite.config.js setup, involving multiple entry points. What a pain but at least I learnt something.