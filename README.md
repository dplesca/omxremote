omxremote
=========

omxremote is a little node.js and [ratchet](http://maker.github.io/ratchet/) powered app for controling omxplayer from your iPhone. It uses a few node modules like: [grashopper](https://github.com/tuxychandru/grasshopper/) for the simple routing, [omxcontrol](https://github.com/rikkertkoppes/omxcontrol) for interfacing with the omxplayer. The front-end is completely in Ratchet using a tad of jQuery for starting, pausing, stopping the videos with ajax. 

##Requirements

- raspbian wheezy (it should be ok on any other os though)
- nodejs, the version I've got installed is 0.6.19, anything higher should most likely be ok.

Clone the repo, cd in it, run npm install. Afterwards, edit the app.js file with a path of your choosing. Run `nodejs app.js` and then just enter on the pi's ip address using port 31415. You can even add the webapp to the homescreen and use it from there.

##Screenshots

![home page](http://farm3.staticflickr.com/2840/9282539121_13da5d3980_z.jpg)
![video page](http://farm4.staticflickr.com/3792/9282538835_c315de781d_z.jpg)
