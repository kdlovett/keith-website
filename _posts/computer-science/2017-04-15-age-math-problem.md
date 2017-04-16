---
layout: post
title: "[Math] Memes and Linearity"
date: 2017-04-15
category: computer-science
---

<link rel="stylesheet" type="text/css"  href="/keiths-site/css/main.css">

Here's I guess a little math musing to illustrate... something?

So there's some meme or something out there about so-and-so (say, Abbott) being double the age as so-and-so (say, Costello). Is this true about their ages in, say, ten years? "Of course not!" declares the meme triumphantly.

I figured intuitively that the meme was indeed correct, but I wanted something more concrete. (Question your memes.) So I thought, there must be some corresponding graph that demonstrates what's going on here, and, here it is.

![Ages1](https://raw.githubusercontent.com/kdlovett/keiths-site/gh-pages/images/ages.png)
Format: ![Alt Text](url)

We can see at the open bracket, when we begin recording, Costello is half the age of Abbott, but as time progresses in a linear fashion, and both men age at the same rate, this is no longer true.

Similarly, say Abbott is 10 when Costello was born, and we started recording as soon as Costello was born, we would have to wait 10 years, for Abbott to be 20, and Costello to be 10, for Abbott to be double Costello's age.

![Ages2](https://raw.githubusercontent.com/kdlovett/keiths-site/gh-pages/images/ages2.png)
Format: ![Alt Text](url)

At no other point in time would this be the case, I suppose because of some truth about linearity.

It might be something like... ```two lines with the same slope share two points for each x along the x-axis with a unique distance to this axis.```

In this case we wanted to find the x value that gave us the points with a proportion of 2, or .5 between them, depending on how you wanted to look at it; so-and-so double so-and-so's age, or so-and-so half so-and-so's age.