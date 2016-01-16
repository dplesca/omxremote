omxremote
=========

omxremote is a little node.js powered app for controling omxplayer from your iOS or Android device. It uses a few node modules like: [express](http://expressjs.com/) for some simple routing, [express3-handlebars](https://github.com/ericf/express3-handlebars) for simple templating, [omxcontrol](https://github.com/rikkertkoppes/omxcontrol) for interfacing with the omxplayer. The front-end is written using the awesome [ratchet 2](http://goratchet.com/) (for both the iOS and Android interfaces), using a tad of jQuery for interacting (starting, pausing, stopping) with the videos.

####Installation

- first you need to install node.js (guide inspired from [this simple tutorial](http://blog.rueedlinger.ch/2013/03/raspberry-pi-and-nodejs-basic-setup/)):
    1. download the nodejs compiled for ARM, make a dir for easy updates and upack node and copy it to the newly created directory
    ```bash
    wget https://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-armv6l.tar.xz
    sudo mkdir /opt/node
    sudo tar -C /opt/node -xJf node-v4.2.4-linux-armv6l.tar.xz --strip 1
    ```
    2. add node to path, edit `.profile` file and add the next lines  
    ```bash
    NODE_JS_HOME="/opt/node"
    PATH="$PATH:$NODE_JS_HOME/bin"
    export PATH
    ```  
    3. after the edit log out and log in again
- next up clone the repo, install node modules:  
```bash
git clone https://github.com/dplesca/omxremote
cd omxremote
npm install
```
- edit your media path in app js `var path = '/home/pi/media_files'`  
- run it: `node app.js`
- point your iPhone's browser to: `http://pi's ip:31415/` and choose the file you want to play
- (optionally) add the link from above to your iPhone's home screen, you can find it fast and use it without entering the weird ip:port address over and over; there's even an app icon included
