omxremote
=========

omxremote is a little node.js and [ratchet](http://maker.github.io/ratchet/) powered app for controling omxplayer from your iPhone. It uses a few node modules like: [grashopper](https://github.com/tuxychandru/grasshopper/) for the simple routing, [omxcontrol](https://github.com/rikkertkoppes/omxcontrol) for interfacing with the omxplayer. The front-end is completely in Ratchet using a tad of jQuery for starting, pausing, stopping the videos with ajax. 

###Requirements

- raspbian wheezy (it should be ok on any other os though)
- nodejs, the version I've got installed is 0.6.19, anything higher should most likely be ok.

##Installation

- clone the repo: `git clone https://github.com/dplesca/omxremote`
- cd in it: `cd omxremote`
- edit app js with a path of your choosing: `var path = '/home/pi/media_files';`
- run it: `nodejs app.js`
- point your iPhone's browser to: `http://pi's ip:31415/` and choose the file you want to play
- (optionally) add the link from above to your iPhone's home screen, you can find it fast and use it without entering the weird ip:port address over and over; there's even an app icon included

###Screenshots

![home page](http://farm3.staticflickr.com/2840/9282539121_13da5d3980_z.jpg) 
![video page](http://farm4.staticflickr.com/3792/9282538835_c315de781d_z.jpg)
