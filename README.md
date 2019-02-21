# nodejs
## HOW TO START A NODE.JS PROJECT
![](https://philna.sh/assets/posts/node-1305aa9ecfe75c279ce6772534e04dd5999ddd372dcf28ef41c2a9a84b5acdb1.png)

Published on Feb 18, 2019 by Happy Xie

Sometimes I write blog posts to remind myself what I’ve learned and sometimes I write them because someone else shares something and I want to remember that better. This post is one of the latter.

## STARTING A NODE.JS PROJECT

Usually when I start a new Node.js project I use `npm` to generate my initial project.

**`npm init`**

`npm` then asks me some questions and builds a `package.json` file for me. Then I start building the project.

Later I inevitably copy and paste a `.gitignore` file from GitHub’s useful repo of `.gitignore` templates. And if I remember I’ll actually create a `LICENSE` file with the open source license that I intended to use.

## CUSTOMISING `npm init`

You can see your current `npm` config by entering `npm config list` on the command line. To just see the config that affects `npm init` you can `grep` for “init”:

*npm config list | grep init*

There are a number of defaults you can set; author name, author email, author url, the license, and the version. To set them, you can enter them on the command line or use `npm config edit` to open up the config file in your text editor. The command line is easy enough though, you can set all five defaults like so:

     npm set init.author.name "Your name"
     npm set init.author.email "your@email.com"
     npm set init.author.url "https://your-url.com"
     npm set init.license "MIT"
     npm set init.version "1.0.0"

Once you have that customised to your liking, `npm init -y` will always produce the right settings.

## BUILDING YOUR OWN INIT SCRIPT

There are some improvements that I’d make to Tierney’s commands, though I appreciate he was constrained by Twitter. Here’s a bash script I have come up with inspired by his tweet.

    function node-project {
       git init
       npx license $(npm get init.license) -o "$(npm get init.author.name)" > LICENSE
       npx gitignore node
       npx covgen "$(npm get init.author.email)"
       npm init -y
       git add -A
       git commit -m "Initial commit"
     }

To the original I’ve added fetching the license type, the author name and email from the `npm init` defaults. I’ve also initialised a new git repository and committed the results of this script as the “Initial commit”.

You can take this function and add it to your `~/.bash_profile`. Then, either `source ~/.bash_profile` or open a new command line window and run `node-project`. Feel free to add or remove other bits as you see fit to create your perfect initialisation script.

## GO START A PROJECT

Now you have the perfect script to start a Node.js project why not go create a new one. I have a few small projects in mind that I plan to build this year and this is a nice basis to start from.