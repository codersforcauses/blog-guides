---
title: Light at end of the pipeline
description: The journey of my hate towards web development and how overtime I saw the beauty in it and eventually turning it to my career
updatedAt: November 12, 2021
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
## What's this all about?
This is about my journey of hating web development and how overtime I saw the beauty in it and eventually turning it to my career.

I wrote this blog because a lot of people having asking me how I got started to be where I am at now, working full-time as a software engineer before even graduating. Most people would think I was just gifted and used magic and sparkles. The truth is, I hated web development and I was disinterested of programming when I first started. I was filed with lots of self-doubt and personal incompetence. This feeling is that I had is what made me persevere and work hard to get where I am at today.

I am sharing this in the hope that it can inspire someone to trust in themselves with the hopes that there is light at the end of the pipeline.

## Glimpses of Web Development in my childhood and teenage years

### 2013: Cheating Web Development with Microsoft Word
I started learning web development during my 6th grade of primary school in roughly the year of 2012. It was all just basic HTML, not even JavaScript or CSS. I found it kind of boring because it was all basic and the website that can be done just by pure HTML is quite limited. In the final project of that year, I was supposed to create a multi-page linking website with family pictures and things. Because of the fact that I found HTML quite boring, I decided to do the entire project in Microsoft Word. Yes!! Microsoft Word, there's actually a feature call "Save Document as HTML" which means that as long as I can create a "pretty"-looking word document, the website looks better than just doing it normally in HTML. Looking back at it, the HTML generated had like thousands of lines of code. I can't remember why there's so many (i was probably too young to understand it either).

The website that I made kind of look like these:
<img src="https://www.uwpgroup.co.uk/wp-content/uploads/2014/04/accept_jesus_forever.png" alt="bad_looking_website" style="max-height:500px; margin: 1rem auto"/>


To be fair, it looked very colorful! (as a young kid, the more colors, the better!). It looked better than this though, a website with no css.

<img src="https://images.saymedia-content.com/.image/t_share/MTc0NjQ2NjgwMzU5MjE2OTEx/basic-web-design-with-html-css.png" alt="no_css_website" style="max-height:500px; margin: 1rem auto"/>


### 2015: First time programming in C++ with a Pessimistic Mindset
As part of the 8th grade curriculum of my high school, I learned C++. I struggled as it was my first time studying programming. It was a mix feeling of "why doesn't this work?" and "yes!!! it works!!". This feeling is what kept me excited especially the competitions being run in class like "whoever gets the first program to work gets this prize!". I did become one of the top students in the class. However, I still felt incompetent and feel like I don't know how to build something useful. To give you a bit more context, the programs that I was limited to create in C++ were just simple programs that can be run on the command line. I had high hopes, but I was overwhelmed by the fact that I don't know how to build user interfaces nor create video games with C++. Furthermore, it didn't help the fact that I had a pessimistic mind-set at the time. The constant thought of "what if I hit my limit" and "what if I put all this effort and get nothing out of it". It's easy to think about this especially with all sorts of global news where kids my age were able to create cool things.

### 2016: Self-learning PHP
During the few months before migrating to Australia, I was like "I must be good at programming maybe I should get a job in it". I quickly thought of things I should learn when creating a proper software. I thought, yes a software should have the following:

- a user interface
- logic
- database interaction

Since I already know C++ and I wanted something where I can easily show my software, I started learning PHP. It's almost the same syntax for printing, for loops, while loops, if statements and all sorts of things (i did not look at what other languages are like). Take a look at the code below.

```c
// C++
for (int i = 0; i < 10; i++) {
    cout << i << endl;
}
```
```php
// PHP
for ($i = 0; $i < 10; $i++) {
    echo $i . '<br/>';
}
```

Also I think another reason as to why I started learning PHP is when I heard "PHP is used almost 80% of the entire internet". I don't have the specific sources, but if you just search "php 80% of web", you will see what I am talking about. Here's an example of a [website](https://w3techs.com/technologies/overview/programming_language) that talks about it. Knowing this, I was set! I started following tutorials in youtube. At the time I didn't fully understanding the tutorials, I was just following eg. I was just installing all sorts of things HAHAHA 😂😂😂. It was pretty cool because I was able to create actual things that has database with MySQL. I even had "phpMyAdmin" to manage my database and use PHP to interact with it.

### 2016-2017: Starting in Australia and Building a Web App for my high school
Fast forward, migrated to Australia and settled down. I joined halfway of the school year (1oth grade), and got put in an existing group of 3 doing mobile development with Swift as part of Computer Science class. My group was creating a sudoku solver app. Since all three of them knows swift and splitting up the work, I tried to catch-up with them by starting to learn Swift. I can tell you that I struggled because the entire thing about that Computer Science class is "do whatever" so there was no formal teaching. I was also not proficient enough in trying to look for resource to learn, I can search stackoverflow and youtube, but that's all about it. I did not have the mental capability to look at formal documentation as of tha timet.

What made catching up even harder was that Swift is a MacOS-specific thing (i have a windows computer), which means I can only learn that during class time (3 hours per week). Eventually I gave up, I could not replicate the tutorials that I was following, Swift was buggy as hell for me. I write code that seems logical, but doesn't work. I tried explaining and asking for help... Also didn't work. This was one of those times as a young kid where I think "is this my limit?". Look at all my peers here, creating cool mobile apps, and here I am... all I can do are command-line apps and bad-looking websites. I accepted defeat, instead of trying hard to learn Swift, I'll try to lift my weight in the group work by actually creating something. One of the things they still haven't done is the "sudoku solving algorithm". I ended up trying to do this at home. Within a couple of hours for a few days attempting my own as well as searching stackoverflow posts, I was able to create that algorithm. I presented it with my group mates, and we started translating what I've written from C++ to Swift. See below to what it looked like:

<img src="/content/light-at-the-end-of-the-pipeline/sudoku.png" alt="sudoku_solver" style="max-height:500px; margin: 1rem auto"/>

This command line essentially can do 2 things:

1. It solves sudoku bit by bit and can be displayed each move
2. It generates a sudoku puzzle (by solving a randomly generated initial sudoku and taking out a specified number of blank spaces)


Fast forward, the teachers were impressed what we did collectively as a group. They said the "last time I've seen one of this created in this class is from 10 years ago". One teacher in particular took notice of this, and invited us to do a special project where we are exempted from attending other classes. I thought this was pretty cool! We were tasked on building a website that tracks "merit points" given to student and generates certificates (a student gets merits point if they do something good for the community or good behaviour in class. If a student gets a certain amount of merit point, they get prizes like tickets to movies and certificates). This system will be supporting around 10 people with the system accomodating over 2000 student records every year. Being the person who has background with web development, I took the lead to setup the website. We talked with the relevant people: IT, general admin in the school and some teachers.

 Of course, chose PHP as the language. Whenever we have updates, we pass around a flash drive (YES!! HAHA, we still did not know the existence of git and we do not use a cloud storage like onedrive or google drive). After my frustration with the "Swift" episode and this happening, it sparked joy in me that I can finally do things. My main contribution at the start of the project ended up with backend development with PHP and SQL. The only frontend bit I had to touch was when I had to render what was in the database. Overtime, the task about backend development ran out (because backends are usually simpler than frontend. Note, it is very hard to differentiate backend and frontend as much because we use PHP to do server-side rendering of apps as well as processing the logic before going to the database). I had to learn a fair bit of CSS and JS.

#### The nightmare with UI/UX and loss of motivation
Now, here's where I was a little bit frustrated again! JS was fairly minimal in the project that we have to do. If we have to do JS, it was mainly because we have to apply CSS. That is all! CSS, for the love of god, is what annoyed me the most! You see, I tried very hard to learn CSS in w3school, I got to the point where I know the syntax and many of the fields in there. However, CSS just doesn't click on me! I think it's because of two reasons: the first reason I was not artistic enough to create a "good-looking" website - like I know a good website when I see one, but to create it is something different. The second reason, even if I am trying to copy the looks of another website, I was not good enough with CSS to replicate it. To give you some examples where I struggled with is positioning. I know margin, width, length and sorts of those things, but I just had a hard time piecing all these together. If you look back at my old codes, you will see all sorts of hacky things like negative margin 😅.

Okay, now let's talk about a scenario that frustrates me the most! Now imagine this, I spend many hours trying to make the website look good! All the CSS hacks that I put there finally works! When it was finally time to show it to show one, I say "open this website at this link". When they go look at it, it looks sh*t. Like legit sh*t (because they have different screen size).

Here's an example, here is what it looks like in desktop. Looks fine right?
<img src="/content/light-at-the-end-of-the-pipeline/login-desktop.png" alt="desktop-login" style="max-height:500px; margin: 1rem auto"/>

Now let's take a look at what it looks like in mobile. As you can see, it looks like sh*t. Now you get what I mean when I can use CSS to make it look good, but not universally in all screen sizes.
<img src="/content/light-at-the-end-of-the-pipeline/login-mobile.png" alt="desktop-login" style="max-height:500px; margin: 1rem auto"/>

This is somewhat embarassing for me especially because I had a reputation of making things look good with MS Powerpoint, MS Word, video and image editors.. I guess in some extent, this is where my self-confidence got destroyed so much. It also didn't help that I didn't have support from people who are close to me. I will always get remarks like "how is that useful?", "you can do that in MS Excel", "yeah I can do that in just a few clicks in WordPress" and so on. There was one person, although I am not close with, he really kept my motivation in programming and creating things like this in general. It was my teacher for 2 years in Computer Science (11th and 12 grade of high school). He's a legend! He's a very laid back teacher, but what I like about him is that he really hypes up everything we do! and I can tell you, the very first thing I needed during those times are a spark of motivation to create something cool! He was the only person that very much appreciated bad-looking functional websites.

#### A Failed Deployment

Fast forward, this project became an extracurricular of mine from 11th grade and 12th grade in high school. As a group, we were able to create something that functions and works (with a user interface that you can use on a standard laptop or desktop screen), however when it comes to production deployment, the people in IT did not know how to deploy this web service in the network. Furthermore, there was also some struggles with the integration with the school's student database. In other words, they do not want to hand us a direct link to get student information which is perfectly understandable! We only really needed "student enrollment" and "student names" in the school but the system can only give a batch of information including private information  of all the students in the school. Sadly, this project never got deployed.

### 2017-2018: Quit Web Development and Allocating the time somewhere else
Aside from that one project alone, I never touched web dev in other place. I lost interest in it, it was too hard to create something cool.

#### Desktop Applications
Instead of doing personal project, I just straight up decided to do standard high school stuff. I still kept my curiosity such as a Year 11 Project where we are tasked to do a cashier system with VB.net (drag and drop GUI and add events on certain things like type and click). I went beyond the project simply with my curiosity... I was curious if it is possible to integrate Microsoft Access with it, and to generate buttons based on the data in the database. I found a youtube video that shows exactly what I wanted to do. Here's what Cafe Au Lait Ordering System looked like! (I was working at McDonald's at the time, and I replicated the interface). There's more pictures if you want, just look [here](https://github.com/frinzekt/Cafe-au-lait-Ordering-System).

<img src="/content/light-at-the-end-of-the-pipeline/cafe-au-lait.png" alt="cafe-au-lait" style="max-height:500px; margin: 1rem auto"/>

I enjoyed doing this project! Unlike web dev, I have drag and drop tools that makes it very easy to create interface! And yes! The cool teacher that I mentioned earlier, he's my teacher at this time.

#### Pissing off a teacher by making him read more code
The cool teacher I mentioned had to go on temporary leave. He was replaced by a teacher that enforces structure very much and everything rigid. He got rid of VB.net in the curriculum, so no more pretty looking GUI . I had to learn Python as part of the new curriculum he proposed. Also, the 6 week allocated project for the Cafe Au Lait Payroll System got smooshed to a 2 week project.

I did not like his teaching style at all! It killed my creativity! When the payroll system project came along, I violated almost every single thing in the project specification such as:

- should save things on CSV . I made it interface with Microsoft Access and just do csv for reporting but no storage
- should only be in 1 file. I created many files for it.
- should not need to install anything. I made the app need all sorts of libraries and Microsoft Access

I spent a lot of time doing this project. It was all worth it in the end, because he said to me after he marked it "That was pretty impressive! But don't you ever do that again! It was very hard to mark that. I can't handle every student submitting me 1000 lines of code each". I got 98% as a mark in the end which is not bad at all considering the fact that I just wanted him to spend more time on it.

If you're curious where the code is, look [here](https://github.com/frinzekt/Cafe-Au-Latte-Payroll-System). Tbh, it's just a huge mess of stackoverflow copy pasting 😂😂😂.

### 2018-2019: First time being on the job to create websites

I eventually graduated in high school and was working for McDonald's at the time. I became comfortable with programming so I accepted an offer at UWA on a course about software engineering and data science.

Also, A friend of mine said that I should work for her brother on websites. So yeah started working for a Digital Agency creating websites. I thought it was a good opportunity because it somewhat aligns to what I will be studying. I am given the freedom to create using anything and was given a CPanel (a place to publish websites all in 1 place). Again, I felt the same frustration with the usual coding of websites (CSS in particular) so I reserved these types of projects. I learned a new tool - WordPress where I can build good-looking websites in just a bliss with a template. I can even use some HTML, CSS and PHP when I needed to. It worked well, but overtime it became very difficult to do certain things like the PHP + MySQL custom implementations I learned.

I eventually gave up this job (Dec 2018 - Jun 2019) because I was getting overwhelmed with trying to balance this work, my work in McDonalds, volunteering at uni (let's talk about this in a second), and my own studies. On top of it, I wasn't getting proper mentoring here (just myself trying things to make it work) and not getting paid 😢.

### 2019: A slap in the face from my mentor in the Coders for Causes
During a networking event - "We'll handle the BS (Business Side) - Software Edition" in the UWA IQX, I met David Yu (the brilliant guy who also has blog entries here). I introduced myself and I said I do some web dev, and he was like "show me your github account dude!". So yeah, I gave him my github account and he was looking at some PHP scripts, and he was like "you should totally join us for the Coders for Causes summer project! Add me on facebook, then I'll send you a message when we open it up".

I ended up working with [Home2Health](https://github.com/codersforcauses/home2health). It was not a fancy project, but it was something that had variety. To be honest, this is where I got slapped in the face. I thought I knew web development just because I knew HTML, CSS, JS and PHP (yes like an arrogant kid that thinks he knew it all). Little did I know that the reason why I hated web development is because I was using PHP wrong. I did not know that there were tools like Bootstrap, MaterialiseCSS and React that I could learn to compensate what I hate the most - user interface that looks terrible and don't resize properly to screens .

Fast forward, winter project ended. All I did was one page of the website, and felt a little worthless. I was informed that we will be continuing the project in the summer. I vowed to myself that I want to be more of an asset to the team when the summer projects came along. So I commenced my intense training!
#### Intense Training
One thing that I realised early on is that, I will eventually have to learn all these things anyways. So why not make my life easier and actually learn it and get ahead of the curve? As a first year student with high hopes, I said that I want to do internships in my 2nd year, and I was kind of scared - what if they ask the question "what value can you bring to the company?". I don't feel comfortable getting ask that question, so this became a scare factor that makes me even want to do this!

Here's a bunch of things I learned over my training:

1. Basics of the web (filling up knowledge gaps)
   1. HTML
   2. CSS
   3. JavaScript
      1. Asynchronous Programming
      2. ES6 and functional programming
2. Frontend Development
   1. React / NextJS
   2. Bootstrap
   3. Material UI
   4. Materialize
   5. Webpack and Babel
   6. Embedded JavaScript
   7. Figma
3. Backend Development
   1. MongoDB + (NoSQL vs SQL databases)
   2. NodeJS + ExpressJS
   3. Firebase
4. Full-Stack Development
   1. Integrating entire backend with frontend (MERN - MongoDB, Express, React, Node)
5. Developer Workflow
   1. Linux Systems
   2. Package managers
   3. VS Code (Yes!!! Highly recommend to become an expert with hotkeys)
   4. Postman
   5. Git CLI, Github, Github desktop and Gitkraken
   6. Software Engineering Workflow - Issues and Pull Request
6. Data Science
   1. Excel
   2. Tableau (with Python Integration)
   3. Jupyter Notebooks
   4. Python (I was filling up my knowledge gaps)
7. Cybersecurity
   1. Kali Linux
   2. Web Vulnerabilities (eg. CORS, XSS, SQL Injection, etc.)
8. Others
   1. Robotics Process Automation with UIPath
   2. Google Calendar

When I mean intense training, I did not have a social life nor free time. Every single moment and minute of my life for ~1.5 year is about learning these things primarily from LinkedIn Learning (UWA was paying for my subscription). Coding and watching tutorial became the time filler after work, after uni, I did not have hobbies (my previous hobbies was gaming, but I once hit 1000+ hours (~42 days) in just 1 game, and felt guilty ever since touching games). It was not easy! Knowing and seeing how applicable all these skills did help me get confidence.

### 2020-2021: Putting all that training into practice
At the end of my intense training, I was confident enough to be able to create something useful. For example, when I quite Maccas and joined a warehouse to do logistics, I was able to create this

<img src="https://user-images.githubusercontent.com/44391389/87741222-8ede7200-c816-11ea-93d2-774338ec809d.png" alt="route-optimiser" style="max-height:500px; margin: 1rem auto"/>

A web app where you can enter the addresses where you have to deliver, and it will generate the most efficient route to take (the order to deliver), which was very useful to the company for delivery. There's other cool things that made me confident about my own ability which made me keep going.

#### First time in End-to-end Software Delivery
At around May 2021, I became a research engineer at the [UWA System Health Lab (SHL)](https://systemhealthlab.com) because I have a connection that reached out to me for an opportunity, and I accepted it!

I was taught in the SHL by my mentors there that I am a software engineer! Not just a programmer or a code monkey, but an engineer that takes the time to solve a problem. This is where I realised requirements documents are a godsend!! Creating them gives clarity what the problem really is (most engineers will find this boring in their first time until they get burned because they did not try to understand the problem fully... ehem, ehem , Frinze 😅). From there, you can try to envision the best possible solution using tools like Figma (create a prototype within days).

My [first project](https://livinglabproject.com) with the SHL, I was given the task to create a website. What website? What does it need? What is it used for? What should it have? Well, it was up to me to figure that out! This project taught me a lot of business analyst side of being an engineer - stakeholder engagement, requirements, and prototyping. Once that's all figured out, just the usual coding... and learned a little bit about deployment.

End-to-end software delivery gave me a huge excitement, because I get to be part of it from the beginning where we have a problem, we design, then we deliver the solution.

#### The skyrocketting opportunities and never running out of things to do
Once you know a little bit about everything, the amount of opportunities there are never runs out. I would say that in some extent, my mindset kind of change. I was able to prove my pessimistic self that "my limits" is only a fiction. My self-doubt about "I can't create cool things", well that's a little bit gone now because I can create things that I can admit to myself are pretty cool.

With my curiosity, I jumped into the wider job market. Sure, I got a lot of rejections in the application, and it may have made me sad from time to time, but my abilities acted as my "safe-guard" on my self-esteem. I eventually had a chat with a guy, and he thought my projects were cool, and asked me if I want to join. I did, now that's where I work currently - Lotterywest!

### 2021: The Present

#### Life outside the Code
I reflected about the joy in workplace that I had. I had "life outside the code".

1. Celebrated a good work in a project drinking an aperol spritz on a rooftop bar! 🍷
<img src="/content/light-at-the-end-of-the-pipeline/life-1.jpg" alt="rooftop bar" style="max-height:300px; margin: 1rem auto"/>

2. Went to golf with the team and our mascot! ⛳️  🐵
<img src="/content/light-at-the-end-of-the-pipeline/bombe.jpg" alt="bombe" style="max-height:300px; margin: 1rem auto"/>

3. Met the easter bunny! 🐰
<img src="/content/light-at-the-end-of-the-pipeline/bunny.jpg" alt="bunny" style="max-height:300px; margin: 1rem auto"/>

4. Celebrated my birthday with the team! 🎉
<img src="/content/light-at-the-end-of-the-pipeline/bday.jpg" alt="bday1" style="max-height:300px; margin: 1rem auto"/>
<img src="/content/light-at-the-end-of-the-pipeline/life-4.jpg" alt="bunny" style="max-height:300px; margin: 1rem auto"/>
<img src="/content/light-at-the-end-of-the-pipeline/life-3.jpg" alt="bday2" style="max-height:300px; margin: 1rem auto"/>

5. Played mini golf! 🏌️
<img src="/content/light-at-the-end-of-the-pipeline/life-2.jpg" alt="golf" style="max-height:300px; margin: 1rem auto"/>

and many more!

#### Deciding to switch part-time studies
I enjoyed the work! When my contract was ending, I got offerred a full-time contract to be a senior developer. With all the things that happened, and also the fact that nobody cares about a software engineering university degree, I decided to switch part-time and accept the full-time job!

So yeah, that the present! Balancing work, studies, and other commitments while enjoying life with a spontaneous, optimistic, and adventurous mindset!

## Retrospective
Looking back at everything I wrote here, there's a few things that can be seen and advices to be gathered from.

- Emotion and motivation go hand-in-hand together and are powerful force in achieving things. You will see that throughout the entire journey, my passion to always do cool things are powered due to my feelings: 
  - jealousy (being around people that can do cooler things so i try to do cool things too)
  - frustation (not being able to do something I wanted to do, so give up and put the effort somewhere else)
  - happiness (showing people cool things and making them happy, so I become happy too)
  - fear (reaching "my limits")
- What I did in the intense training is not healthy! Sure it did give me an edge in the start of my career, but I kind of miss a lot of things and adventure. 
  - Will I do it ever again in my entire life? Probably not, there's more to life than just the code. Try having a glass of moscato while feeling the breeze in the rooftop bar at Vibe Hotel, and you'll understand what I mean
  - If I can go back in time to change that, will I? Probably not, because if I did change that, then how would I have this realisation and self-reflection?
- There is only one person that you have to impress in your entire life. And that person is you! Create things that you think are cool! Be yourself!
- Keep an open-mindset
  - If I was resistive in learning from my mentor David Yu, then I wouldn't be here today
- Believing in oneself is very important!
  - Trusting that all the hard work will be fruitful is very motivating to do something!



## Why is the title of this blog "Light at the end of the pipeline"
Firstly, let me tell you briefly what CI (Continuous Integration) pipelines are - they are essentially a place where automations are ran for automated software testing. They are very time consuming to develop but they are very valuable in maintaining software. When I mean time consuming, I mean that for every attempt that you make, you have to wait for the automation to finish to know whether it worked properly.

When I told one of my co-workers about the blog that I am writing, I said I'll probably name it "I hated web dev, but now I am loving it!". He said to name it after one of my biggest accomplishments in the workplace - integration testing in Cloud (Bitbucket pipelines) on a 10-year-old Python2 codebase that is traditionally done on-premise. So it is a bit of a play on words from the cliche title "Light at the end of the tunnel".

## Remarks
I hope you enjoyed reading this blog! Hopefully, I have been able to motivate you to do something different to other people and to be open-minded. You never knew what you could do with your life. Trust that there is light at the end of the pipeline!

You know what they say,

> Don't forget to bring the light,
> 
> Even in the darkest of night,
> 
> For when it becomes bright,
> 
> Everything becomes alright!
