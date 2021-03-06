---
layout: post
title: "Troubleshooting with Jekyll to Make a Site"
date: 2017-01-15
category: computer-science
---

<link rel="stylesheet" type="text/css"  href="/keiths-site/css/main.css">

I had a heck of a time getting Jekyll (what I used to make this site) installed so I'd like to maybe help clarify some issues others may run into, because realistically there can be quite a few steps in between having Jekyll not installed, and then having it installed.

So first things first you need Homebrew; probably easiest if you don't have that yet, just install it.

If (like me) you DO have it, but you are running into some issues (in my case I was running into permission errors that were keeping me from doing anything with brew.) check out this question on stack overflow. After messing around a bit I wound up with roughly the same error listed in the question.

[http://stackoverflow.com/questions/24652996/homebrew-not-working-on-osx](http://stackoverflow.com/questions/24652996/homebrew-not-working-on-osx)

This also has some info.

[http://stackoverflow.com/questions/14527521/brew-doctor-says-warning-usr-local-include-isnt-writable](http://stackoverflow.com/questions/14527521/brew-doctor-says-warning-usr-local-include-isnt-writable)

Make sure you read plenty up on what you're doing.

Now, there are a couple different potential solutions listed here. I had to try a couple things before I got brew working again in the command line. But point is you've made it.

Next up we need a Ruby version manager. There are two options that I know of - rbenv and rvm. My understanding of them is that these are a means of ensuring that a programmer does not tinker with the version of Ruby that is currently operating on the machine. Doing so would apparently be bad for the machine. We don't want that.

In other words you probably already HAVE some version of Ruby running on your machine. But this is the version of Ruby that the System uses, so you don't want to mess with it.

Okay so anyways, I went with rbenv. Seemed like that was the better option according to most people and it seems to have more documentation than rvm.

[https://github.com/rbenv/rbenv#homebrew-on-mac-os-x](https://github.com/rbenv/rbenv#homebrew-on-mac-os-x)

This documentation explains everything better than I could, so read up that stuff until you have a good understanding of what you are doing.

One point worth noting is this:
So you get some version of Ruby installed, you've checked that the machine is now using that version of Ruby as opposed to the systems version. Good. Now you're supposed to install Ruby Gems.

[https://en.wikipedia.org/wiki/RubyGems](https://en.wikipedia.org/wiki/RubyGems)

Long story short, it's a package manager for Ruby. Cool. Now perhaps, when you attempt to install Gems using the command the documentation for rbenv provides, you encounter a permissions error. Now, I'm going to have to learn a bit more about PATH, but I think I have the gist of what is going on, so here goes.

First, so see what I'm talking about and get an idea about what might be going on, check out this stack question:

[http://stackoverflow.com/questions/14607193/installing-gem-or-updating-rubygems-fails-with-permissions-error](http://stackoverflow.com/questions/14607193/installing-gem-or-updating-rubygems-fails-with-permissions-error)

Okay cool. So basically, even if we switched what version of Ruby we are using so that we are no longer using the systems version, the PATH (keep in mind I'm still a little ambiguous on what exactly PATH is; I'm learning alongside you.) is probably still not indicating the "right" location.

How did I deduce this? I typed in:
```sh
echo $PATH
```
as suggested on the above stackoverflow link, which showed the order of my load path as being something completely unrelated to rbenv, or shims. Which, I figured should have something to do with the current path. Turns out I think something in my bash profile was causing my path to be set to something else.

The solution here is quite simple. Hooray! I just commented out the line that was causing the path to be set elsewhere in the bash profile, and then closed out of terminal and opened it again.
Now when you type in:
```sh
echo $PATH
```
you should see something involving rbenv and shims. Hooray again! You should be good to go, and can install Gems. But what happened to set the path correctly? Well I'm pretty sure it has to do with the rbenv init line we added to the bash profile, which just makes sure PATH is set to the rbenv shims directory whenever the terminal is opened.

Now for the moment you've all been waiting for, Jekyll:

[https://jekyllrb.com/](https://jekyllrb.com/)

y o u ' v e     m a d e    i t.