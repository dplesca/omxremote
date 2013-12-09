omxremote
=========

omxremote is a little node.js and [ratchet](http://maker.github.io/ratchet/) powered app for controling omxplayer from your iPhone. It uses a few node modules like: [express](http://expressjs.com/) for some simple routing, [express3-handlebars](https://github.com/ericf/express3-handlebars) for simple templating, [omxcontrol](https://github.com/rikkertkoppes/omxcontrol) for interfacing with the omxplayer. The front-end is completely in Ratchet using a tad of jQuery for starting, pausing, stopping the videos with ajax. 

####Requirements

- raspbian wheezy (it should be ok on any other os though)
- node: install latest node using [this simple tutorial](http://blog.rueedlinger.ch/2013/03/raspberry-pi-and-nodejs-basic-setup/) and [the official node distribution](http://nodejs.org/dist/)

####Installation

- clone the repo: `git clone https://github.com/dplesca/omxremote`
- cd in it: `cd omxremote`
- install npm modules: `npm install`
- edit app js with a path of your choosing: `var path = '/home/pi/media_files';`
- run it: `node app.js`
- point your iPhone's browser to: `http://pi's ip:31415/` and choose the file you want to play
- (optionally) add the link from above to your iPhone's home screen, you can find it fast and use it without entering the weird ip:port address over and over; there's even an app icon included

####Screenshots

![home page](http://farm3.staticflickr.com/2840/9282539121_13da5d3980_z.jpg) 
![video page](http://farm4.staticflickr.com/3792/9282538835_c315de781d_z.jpg)
