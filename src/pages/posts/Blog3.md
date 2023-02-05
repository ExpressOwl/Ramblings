---
layout: '../../layouts/BlogPost.astro'
title: Deploying the Site
date: 2023-02-05
tags: ['Cloudflare', 'Vercel', 'Netlify', 'Astro']
---

It took a lot of effort to deploy this site as I didn't know @astrojs/image was not supported by a lot of the web hosting sites such as Cloudflare, Vercel and Vercel without the use of an adapter (https://docs.astro.build/en/guides/server-side-rendering/). I guess this is a lesson in needing to read the documentation because it would have saved me a lot of time.

The domain name I bought was on Cloudflare but I hosted my project on Vercel. At first I thought it was a simple job of just typing in the name of the domain into Vercel's custom domain form but it turns out I needed to do it via DNS or proxy, (https://vercel.com/guides/using-cloudflare-with-vercel), I didn't know about this so I was actually fumbling around a while looking into the Astro discord and other online forums.

