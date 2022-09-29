# Countries and States Project

## Overview
First off thank you Alan, thank you Nancy and thank you Brian.  
Also, thanks Dave, Matt, Lance and Will for lending your time and energy to answering our questions and providing resources and encouragement to us through Slack.

Now, let's begin.

This ["wrap-up" project](https://github.com/exelaration/team-resources/blob/master/ONBOARDING.md) is our first assignment, which we started after doing the [HTML](https://www.codecademy.com/learn/learn-html), [CSS](https://www.codecademy.com/learn/learn-css) and [JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) training courses on Codeacademy, as well as two Git tutorials, [Practical Git for Everyday Use](https://egghead.io/courses/practical-git-for-everyday-professional-use) and [Welcome to Learn Git Branching](https://learngitbranching.js.org/).

My colleagues' repos:
- [**Liam**](https://github.com/LiamCespedes)
- [**Mital**](https://github.com/mitalgajjar)
- [**Sandy**](https://github.com/syeung7)
- [**Josh**](https://github.com/syeung7)

## Objective
> Your wrap-up exercise for your onboarding is to make a website (can be just a single HTML page) that will use JavaScript to get data from an external REST API.  The details are as follows:

> 1. When the page loads, populate a dropdown menu with the results from a `GET` call to `https://xc-countries-api.herokuapp.com/api/countries/`
> 2. When a country is selected from the country dropdown, populate a second dropdown with the results from a `GET` call to `https://xc-countries-api.herokuapp.com/api/countries/<country_code>/states/`
> 3. Once all of that is done, create a way to add a new country by sending a `POST` call to `https://xc-countries-api.herokuapp.com/api/countries/`
> 4. Create a way to add new states by sending a `POST` call to `https://xc-countries-api.herokuapp.com/api/states/`

## Initial Challenges
Step #1 took some time, but there were enough tutorials online to put together an initial dropdown list.  At one point, I was able to console.log and see the array response, but I couldn't parse and display the data.  Challenges really began when I moved to Step #2.  

## Dude, where's my bike?
I struggled for days on Step #2.  Biking home Friday evening was refreshing.  I love the bike lane on Wilson Blvd from Courthouse, through Clarendon, and via Fairfax Drive, to Ballston, but even the ride didn't fully clear my mind.  Then, when it seemed it couldn't get any worse, tragedy struck.  On Saturday my bike was stolen.

Long story short, you never know what you [got til it's gone](https://www.youtube.com/watch?v=uIhJvYScvnE).  When I was in a bad place, a friend gave that old Trek to me.

**RIP TREK** 
**_February 16, 2022 - September 24, 2022_**

Ride in peace.  I just hope you're in a better place.

**Ps. Update Sunday morning**

[![He gets it](https://img.youtube.com/vi/6T1tvyfcezI/0.jpg)](https://www.youtube.com/watch?v=6T1tvyfcezI)

I'm grateful at least one person in the world understands

## Noodling
I noodled on the project over the weekend and stumbled on Bootstrap.  [Thank you Liz!](https://youtu.be/AaVy9UR30Dc)  This took care of my CSS, and allowed me to refactor my code; however, I was still having issues though because I wasn't completely understanding how to access .json objects and overall methods, and arrays.  I made a note in my journal that I had to regroup and build a better foundation.  My goal at this point is a strong base of knowledge on the basics.

## Incremental Progress - Step #2 complete
Brian helped me work out the major errors in my `loadStates` function (related to the `stateList` id) by allowing me to walk through what i was trying to do in pseudocode.  He helped me identify and debug errors by commenting out several lines of code, inserting a `console.log` statement, and having the developer tools show us what was happening each step of the way.  By the time we were finished, I noticed a bug.  While the state dropdown worked, if a user chose a second country, that country's states would display underneath the previously displayed states.

I searched for a way to clear the list, inserting a new function within the `loadStates` function.  Brian suggested pulling the function out (duh!), which I hope to think I would have thought of.  A few tweaks to some [code](https://stackoverflow.com/questions/3364493/how-do-i-clear-all-options-in-a-dropdown-box), voila.  I felt comfortable enough to move to Step #3.

<img src="https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif" />

## Step 3
Envisioning: add a new country and a box pops up to request the country code.

Matt helped me get troubleshoot my initial function issues; much like with Brian, we commented out a bunch of code and inserted a `console.log` to see what was going on.  Matt identified immediately that I was not passing the .json object to the API correctly, so we created an object variable that took the `name` from the `newCountryInput` value.

He also showed me the api, which was super cool.  We talked and when he left, he told me that instead of jumping directly to the pop-up box, just add another input field for the country code, and wire the function.

Things felt like they were coming together.

[//]: # "## TIL"