![Deploying a React site on Netlify](/images/netlify-logo.jpg)

### Deploying a React site on Netlify

Welp, here we are. First and most definitely NOT the last blog post. I'll make sure to have a big post about me up soon but until then welcome to the site!

I'd like to start by going over why I chose Netlify to host my site, and then go into more of the process and difficulties I encountered in getting it set up.

In the software development bootcamp I'm currently taking, we've been using Heroku to host our projects. There's a lot to be said for Heroku, initially there is a bit of a learning curve, but has a fairly straight-forward process in using if you have someone walk you through the setup of your first couple of projects.

During my last project in class we got more practice with Github, and I was fortunate enough to work along-side a classmate that had already put his blog site up, whom suggested that I use Netlify because of it's close-knit integration with git and Github. Of course there is the wordpress or squarespace route; and yes it did cross my mind to throw a quick one up there just to get something live. But once I heard how easy it was to use Netlify I figured it would be worth a shot.

After pushing to my 'main' branch for the final time in my repository it seemed as simple as going on to netlify's website, creating an account, and setting up a new project. The error I was getting when deploying though refered to a build error.

> "build.command" failed

A couple hours and a beer later I was at the point of asking my classmate. We worked deleting the site, fixing code, and configuring DNS settings until finally it hit him and he realized that my .git file couldn't find my package.json! We had just dealt with this problem when going to deploy our last project and what do you know, it hit us again!

Bringing all of my files including my package.json out into the floor directory where I had initialized my repo and where the .git file sat with:

> mv jctech/chester-react-main/\* jctech/

was all I needed. After the changes I did a quick push to the 'main' branch of my repo and when I checked the Netlify deploy it was already under way. How cool is that! That was all I needed to get it up and going. I'll make sure to come back with a post explaining how I got the DNS configured, but until then make sure to have your package.json and your .git file in the same folder, and thanks for reading!
