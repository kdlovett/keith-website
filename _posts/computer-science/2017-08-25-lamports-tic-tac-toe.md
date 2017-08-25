---
layout: post
title: "[Project] Exploring Lamport Thinking and Tic Tac Toe"
date: 2017-08-25
category: computer-science
---

<link rel="stylesheet" type="text/css"  href="/keiths-site/css/main.css">

[Here's a game of tic tac toe I made that you can play online with a friend.](https://github.com/kdlovett/lamports-tic-tac-toe) It basically reads and writes data in a Google Spreadsheet in order to allow you to make moves and know what moves your opponent made. I named it after Lamport, since I think the notion of [Lamport timestamps](https://en.wikipedia.org/wiki/Lamport_timestamps) is kinda neat and since it seems like an online game of tic tac toe implements somewhat similar logic, where you have parts of a system which rely on both parties to maintain it, like switching whose turn it is, or ensuring that one player wins, and the other loses... I don't know why, but I'm drawn to this sort of thing.

![Tic Tac Toe](/keiths-site/images/tictactoe.png)