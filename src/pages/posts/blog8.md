---
layout: "../../layouts/BlogPost.astro"
title: Making a game using React and TMDB API
date: 2023-04-10
tags: ["React", "TailwindCSS", "Vite", "API", "Axios"]
---

I recently found a very well documented API called The Movie DataBase (https://www.themoviedb.org/), and so wanted to create something with it. I was initially thinking of a simple IMDB clone but it didn't seem very unique so I came up with the idea of creating some sort of game. I settled on a game where you have to guess the date of movie poster shown and you are given 3 lives to try and get a high score.

Admittedly its not SUPER creative but I did learn a lot doing this project. I was able to drill in useState() and useEffect() a lot more into my head and I also learnt how to use axios. The params it provides for the header is very useful and means you only need to set things once. It also came to my attention that you could useState() with localStorage, which really helped with the functionality of the game.

Everything else was pretty standard, just commonly used methods like slice(), parseInt(), JSON.stringify(), and many more to achieve what neede to be done.

I must say 1/2 through working into the project I realise how awful my folder structure is, I need to get better at organising my code...

Other than that I hope my next project won't have such a large gap.
