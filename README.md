omxremote
=========

omxremote is a little node.js powered app for controling omxplayer from your iOS or Android device. It uses a few node modules like: [express](http://expressjs.com/) for some simple routing, [express3-handlebars](https://github.com/ericf/express3-handlebars) for simple templating, [omxcontrol](https://github.com/rikkertkoppes/omxcontrol) for interfacing with the omxplayer. The front-end is written using [ratchet](http://maker.github.io/ratchet/) (for the iOS part) and Fries (for Android interfaces) using a tad of jQuery for starting, pausing, stopping the videos with ajax.

####Installation

- first you need to install node.js (guide inspired from [this simple tutorial](http://blog.rueedlinger.ch/2013/03/raspberry-pi-and-nodejs-basic-setup/)):
    1. download the nodejs compiled for ARM: `wget http://nodejs.org/dist/v0.10.22/node-v0.10.22-linux-arm-pi.tar.gz`
    2. make a dir for easy updates `sudo mkdir /opt/node`
    3. upack node and copy it to the newly created directory
            tar xvzf node-v0.10.22-linux-arm-pi.tar.gz
            sudo cp -r node-v0.10.22-linux-arm-pi/* /opt/node
    4. add node to path, edit `.profile` file and add the next lines
            NODE_JS_HOME="/opt/node"
            PATH="$PATH:$NODE_JS_HOME/bin"
            export PATH
    5. after the edit log out and log in again
- clone the repo: `git clone https://github.com/dplesca/omxremote`
- cd in it: `cd omxremote`
- install npm modules: `npm install`
- edit app.js with a path of your choosing: `var path = '/home/pi/media_files';`
- run it: `node app.js`
- point your iPhone's browser to: `http://pi's ip:31415/` and choose the file you want to play
- (optionally) add the link from above to your iPhone's home screen, you can find it fast and use it without entering the weird ip:port address over and over; there's even an app icon included

At this point you should be able to start, pause and stop videos in omxplayer. If you want to be able to move back/forward in the video and toggle subtitles in mkv files you need to edit one of the installed node modules yourself. Just replace the **node_modules/omxcontrol/index.js** file with [the one from my fork of the project](https://raw.github.com/dplesca/omxcontrol/master/index.js).

####Screenshots

#####iOS - iPhone 5
![homepage](http://i.imgur.com/L8BFDpZl.jpg)
![video page](http://i.imgur.com/tNYUzh8l.jpg)

#####Android - Nexus 7

![homepage](http://i.imgur.com/sAwhgFql.png)
![video page](http://i.imgur.com/e83xSgQl.png)
