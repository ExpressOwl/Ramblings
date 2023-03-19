---
layout: "../../layouts/BlogPost.astro"
title: Removing the .html from a website
date: 2023-03-19
tags: ["Vercel", "cleanUrls", "Vite"]
---

I was recently looking around on how to configure Vite to not show the .html ending on a URL of a site but it turns out I was looking at the wrong place.

Vercel has a configuration file you can attach to your projects called vercel.json and they have an option called cleanUrls which will remove the .html endings for you. Very convenient. Here is the site in case you want to read more configurations, https://vercel.com/docs/concepts/projects/project-configuration.