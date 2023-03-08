---
layout: "../../layouts/BlogPost.astro"
title: Making a Space Invaders Game
date: 2023-03-08
tags: ["HTML Canvas", "JavaScript", "Game"]
---

I wanted to make a small game for a side project and just wanted to use Vanilla JavaScript to keep it simple. https://space-invader.pages.dev/
I settled to take a spin on Space Invaders and learnt that HTML canvas is quite dynamic, especially when it comes to hitbox detection, which was hard to wrap my head around at first and is still a little bit confusing. 

This is because the canvas starts at 0,0 on the x,y axis but instead of thinking about it as you would think like in math class, the canvas goes right as normal on the x axis but down when it comes to the y axis, yet the value of y is positive. Tricky.

Another thing I learned was the use of delta time when requesting the animation frame for an update of the game. Delta time will ensure your game has a consistent speed whereas setting an interval every 10ms for example could be inaccuarate if the users PC lags. 