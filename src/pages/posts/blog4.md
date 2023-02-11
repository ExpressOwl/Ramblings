---
layout: "../../layouts/BlogPost.astro"
title: Using Jikan API
date: 2023-02-11
tags: ["Tailwind CSS", "Flowbite", "React"]
---

Is it called React or ReactJS?

Anyways, I want to talk about my most recent project which was using the Jikan API in order to make an Anime Database which can search up different shows.
The Site pulls different information such as the shows sorted by popularity and the synopsis of the shows searched up.

It took a while to make this site because I couldn't wrap my head around the states in React, to be honest I still kinda don't but at least I have an idea on the general structure on how to use an API.

Speaking of API's this particular one, Jikan, doesn't need a key but is still considered a REST API. Their documentation isn't stellar because I couldn't really figure out what to add at the end of the http request to get the different elements but in the end it all worked out thanks to stackoverflow reccomending different queries to use.

This was also my first time using Flowbite which creates stylish looking components for you. In the future I probably won't make a component myself from scratch anymore. Seems like too much work, especially when really good looking ones are already out there made for you. Of course I will customise them to my need and even though I enjoy the availability of these already made components I don't think I would go as far as to use a template yet.

Overall this project is a solid step forward to learning React and I think I will be able to make more complicated apps in the future. I have a strong urge to make another app with a different API, just to get more practise.

P.S. CloudFlare does not support PNPM build yet, which is why my sites fail to deploy. I always thought it was some other problem but I'm thankful I finally know the reason why.
