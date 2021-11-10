---
title: Light at end of the pipeline
description: The journey of my hate towards web development and how overtime I saw the beauty in it and eventually turning it to my career
updatedAt: November 9, 2021
img: https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80
alt: webdev
tags:
  - career
  - webdev
author:
  name: Frinze Erin Lapuz
  bio: Experiencing the world!
  img: https://avatars.githubusercontent.com/u/44391389?v=4
---

## Glimpses of Web Development in my childhood and teenage years

### 2013: Cheating Web Development with Microsoft Word
I started learning web development during my 6th grade of primary school in roughly the year of 2012. It was all just basic HTML, not even JavaScript or CSS. I found it kind of boring because it was all basic and the website that can be done just by pure HTML is quite limited. In the final project of that year, I was supposed to create a multi-page linking website with family pictures and things. Because of the fact that I found HTML quite boring, I decided to do the entire project in Microsoft Word. Yes!! Microsoft Word, there's actually a feature call "Save Document as HTML" which means that as long as I can create a "pretty"-looking word document, the website looks better than just doing it normally in HTML. Looking back at it, the HTML generated had like thousands of lines of code. I can't remember why there's so many (i was probably too young to understand it either).

The website that I made kind of look like these:
<img src="https://www.uwpgroup.co.uk/wp-content/uploads/2014/04/accept_jesus_forever.png" alt="bad_looking_website" style="max-height:500px; margin: auto"/>


To be fair, it looked very colorful! (as a young kid, the more colors, the better!). It looked better than this though, a website with no css.

<img src="https://images.saymedia-content.com/.image/t_share/MTc0NjQ2NjgwMzU5MjE2OTEx/basic-web-design-with-html-css.png" alt="no_css_website" style="max-height:500px; margin: auto"/>


### 2015: First time programming in C++ with a Pessimistic Mindset
As part of the 8th grade curriculum of my high school, I learned C++. I struggled as it was my first time studying programming. It was a mix feeling of "why doesn't this work?" and "yes!!! it works!!". This feeling is what kept me excited especially the competitions being run in class like "whoever gets the first program to work gets this prize!". I did become one of the top students in the class. However, I still felt incompetent and feel like I don't know how to build something useful. To give you a bit more context, the programs that I was limited to create in C++ were just simple programs that can be run on the command line. I had high hopes, but I was overwhelmed by the fact that I don't know how to build user interfaces nor create video games with C++. Furthermore, it didn't help the fact that I had a pessimistic mind-set at the time. The constant thought of "what if I hit my limit" and "what if I put all this effort and get nothing out of it". It's easy to think about this especially with all sorts of global news where kids my age were able to create cool things.

### 2016: Self-learning PHP
During the few months before migrating to Australia, I was like "I must be good at programming maybe I should get a job in it". I quickly thought of things I should learn when creating a proper software. I thought, yes a software should have the following:

- a user interface
- logic
- database interaction

Since I already know C++ and I wanted something where I can easily show my software, I started learning PHP. It's almost the same syntax for printing, for loops, while loops, if statements and all sorts of things (i did not look at what other languages are like). Take a look at the code below.

```c
cout << "Hello World!\n";
```

```php
<?php echo 'Hello World<br/>'; ?> 
```

```c
for (int i = 0; i < 10; i++) {
    cout << i << endl;
}
```
```php
for ($i = 0; $i < 10; $i++) {
    echo $i . '<br/>';
}
```

Also I think another reason as to why I started learning PHP is when I heard "PHP is used almost 80% of the entire internet". I don't have the specific sources, but if you just search "php 80% of web", you will see what I am talking about. Here's an example of a [website](https://w3techs.com/technologies/overview/programming_language) that talks about it. Knowing this, I was set! I started following tutorials in youtube. At the time I didn't fully understanding the tutorials, I was just following eg. I was just installing all sorts of things HAHAHA 😂😂😂. It was pretty cool because I was able to create actual things that has database with MySQL. I even had "phpMyAdmin" to manage my database and use PHP to interact with it.

### 2016-2017: Starting in Australia and Building a Web App for my high school
Fast forward, migrated to Australia and settled down. I joined halfway of the school year (1oth grade), and got put in an existing group of 3 doing mobile development with Swift as part of Computer Science class. My group was creating a sudoku solver app. Since all three of them knows swift and splitting up the work, I tried to catch-up with them by starting to learn Swift. I can tell you that I struggled because the entire thing about that Computer Science class is "do whatever" so there was no formal teaching. I was also not proficient enough in trying to look for resource to learn, I can search stackoverflow and youtube, but that's all about it. I did not have the mental capability to look at formal documentation as of tha timet.

What made catching up even harder was that Swift is a MacOS-specific thing (i have a windows computer), which means I can only learn that during class time (3 hours per week). Eventually I gave up, I could not replicate the tutorials that I was following, Swift was buggy as hell for me. I write code that seems logical, but doesn't work. I tried explaining and asking for help... Also didn't work. This was one of those times as a young kid where I think "is this my limit?". Look at all my peers here, creating cool mobile apps, and here I am... all I can do are command-line apps and bad-looking websites. I accepted defeat, instead of trying hard to learn Swift, I'll try to lift my weight in the group work by actually creating something. One of the things they still haven't done is the "sudoku solving algorithm". I ended up trying to do this at home. Within a couple of hours for a few days attempting my own as well as searching stackoverflow posts, I was able to create that algorithm. I presented it with my group mates, and we started translating what I've written from C++ to Swift. See below to what it looked like:

<img src="/content/sudoku.png" alt="sudoku_solver" style="max-height:500px; margin: auto"/>

This command line essentially can do 2 things:

1. It solves sudoku bit by bit and can be displayed each move
2. It generates a sudoku puzzle (by solving a randomly generated initial sudoku and taking out a specified number of blank spaces)


Fast forward, the teachers were impressed what we did collectively as a group. They said the "last time I've seen one of this created in this class is from 10 years ago". One teacher in particular took notice of this, and invited us to do a special project where we are exempted from attending other classes. I thought this was pretty cool! We were tasked on building a website that tracks "merit points" given to student and generates certificates (a student gets merits point if they do something good for the community or good behaviour in class. If a student gets a certain amount of merit point, they get prizes like tickets to movies and certificates). This system will be supporting around 10 people with the system accomodating over 2000 student records every year. Being the person who has background with web development, I took the lead to setup the website. We talked with the relevant people: IT, general admin in the school and some teachers.

 Of course, chose PHP as the language. Whenever we have updates, we pass around a flash drive (YES!! HAHA, we still did not know the existence of git and we do not use a cloud storage like onedrive or google drive). After my frustration with the "Swift" episode and this happening, it sparked joy in me that I can finally do things. My main contribution at the start of the project ended up with backend development with PHP and SQL. The only frontend bit I had to touch was when I had to render what was in the database. Overtime, the task about backend development ran out (because backends are usually simpler than frontend. Note, it is very hard to differentiate backend and frontend as much because we use PHP to do server-side rendering of apps as well as processing the logic before going to the database). I had to learn a fair bit of CSS and JS.

#### The nightmare with UI/UX and loss of motivation
Now, here's where I was a little bit frustrated again! JS was fairly minimal in the project that we have to do. If we have to do JS, it was mainly because we have to apply CSS. That is all! CSS, for the love of god, is what annoyed me the most! You see, I tried very hard to learn CSS in w3school, I got to the point where I know the syntax and many of the fields in there. However, CSS just doesn't click on me! I think it's because of two reasons: the first reason I was not artistic enough to create a "good-looking" website - like I know a good website when I see one, but to create it is something different. The second reason, even if I am trying to copy the looks of another website, I was not good enough with CSS to replicate it. To give you some examples where I struggled with is positioning. I know margin, width, length and sorts of those things, but I just had a hard time piecing all these together. If you look back at my old codes, you will see all sorts of hacky things like negative margin 😅.

Okay, now let's talk about a scenario that frustrates me the most! Now imagine this, I spend many hours trying to make the website look good! All the CSS hacks that I put there finally works! When it was finally time to show it to show one, I say "open this website at this link". When they go look at it, it looks sh*t. Like legit sh*t (because they have different screen size). This is somewhat embarassing for me especially because I had a reputation of making things look good with MS Powerpoint, MS Word, video and image editors.

Here's an example, here is what it looks like in desktop. Looks fine right?
<img src="/content/login-desktop.png" alt="desktop-login" style="max-height:500px; margin: auto"/>

Now let's take a look at what it looks like in mobile. As you can see, it looks like sh*t. Now you get what I mean when I can use CSS to make it look good, but not universally in all screen sizes.
<img src="/content/login-mobile.png" alt="desktop-login" style="max-height:500px; margin: auto"/>

This is somewhat embarassing for me especially because I had a reputation of making things look good with MS Powerpoint, MS Word, video and image editors.. I guess in some extent, this is where my self-confidence got destroyed so much. It also didn't help that I didn't have support from people who are close to me. I will always get remarks like "how is that useful?", "you can do that in MS Excel", "yeah I can do that in just a few clicks in WordPress" and so on. There was one person, although I am not close with, he really kept my motivation in programming and creating things like this in general. It was my teacher for 2 years in Computer Science (11th and 12 grade of high school). He's a legend! He's a very laid back teacher, but what I like about him is that he really hypes up everything we do! and I can tell you, the very first thing I needed during those times are a spark of motivation to create something cool! He was the only person that very much appreciated bad-looking functional websites.

### A Failed Production Deployment

Fast forward, this project became an extracurricular of mine from 11th grade and 12th grade in high school. As a group, we were able to create something that functions and works (with a user interface that you can use on a standard laptop or desktop screen), however when it comes to production deployment, the people in IT did not know how to deploy this web service in the network. Furthermore, there was also some struggles with the integration with the school's student database. In other words, they do not want to hand us a direct link to get student information which is perfectly understandable! We only really needed "student enrollment" and "student names" in the school but the system can only give a batch of information including private information  of all the students in the school. Sadly, this project never got deployed.

### 2017-2018: Quit Web Development
I took a break from web development. 

### 2018-2019: First time being on the job to create websites and doing things with WordPress

### 2019: Meeting the Coders for Causes


## Why I hated web development?

## A slap in the face from my mentor from the Coders for Causes

## The start of 
