omxremote
=========

omxremote is a little node.js powered app for controling omxplayer from your iOS or Android device (or even your normal browser). It uses a few node modules like: [express](http://expressjs.com/) for some simple routing, [simpleomxcontrol](https://github.com/dplesca/simpleomxcontrol) for interfacing with the omxplayer. The front-end is written using the awesome [react library](http://facebook.github.io/react/).

####Installation

- install nodejs
- clone repo and run `npm install`
- run it with adding your media path as a command line param: `node app.js -p /media/videos`
- point your Android/iOS device's browser to: `http://pi's ip:31415/` and choose the file you want to play
- (optionally) add the link from above to your Android/iOS home screen, you can find it fast and use it without entering the weird ip:port address over and over; there's even an app icon included
