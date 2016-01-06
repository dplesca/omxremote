var express = require('express'),
    omx = require('omxcontrol'),
    mediaPath = '/media/Seagate/video',
    fs = require('fs'),
    path = require('path');
    app = express();

app.use(express.static('assets'));

traverseFileSystem = function (currentPath, all_files) {
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
        var currentFile = currentPath + '/' + files[i];
        var stats = fs.statSync(currentFile);
        if (stats.isFile() &&  files[i].match(/(.+).(mkv|mp4|avi)$/)) {
            all_files.push({"file" : files[i], "hash": new Buffer(currentFile).toString('base64')});
        }
        else if (stats.isDirectory()) {
            traverseFileSystem(currentFile, all_files);
        }
    }
    return all_files;
};

app.get('/', function (req, res) {
    res.sendFile("index.html", { root: path.join(__dirname, "/views") });
});

app.get('/files', function(req, res){
    var all_files = [];
    var files = traverseFileSystem(mediaPath, all_files), params = {};
    files.sort(function (a, b) {
        return a.file.toLowerCase().localeCompare(b.file.toLowerCase());
    });
    res.send(files);
});

app.post('/file/:name/start', function(req, res) {
    var filename = new Buffer(req.params.name, 'base64').toString('ascii');
    omx.start(filename);
    res.sendStatus(200);
});

app.post('/file/:name/pause', function(req, res) {
    omx.pause();
    res.sendStatus(200);
});

app.post('/file/:name/play', function(req, res) {
    omx.pause();
    res.sendStatus(200);
});

app.post('/file/:name/stop', function(req, res) {
    omx.quit();
    res.sendStatus(200);
});

app.post('/file/:name/forward', function(req, res) {
    omx.forward();
    res.sendStatus(200);
});
app.post('/file/:name/backward', function(req, res) {
    omx.backward();
    res.sendStatus(200);
});
app.post('/file/:name/subs', function(req, res) {
    omx.subs();
    res.sendStatus(200);
});


app.listen(31415);

console.log('omxremote launched on port 31415');
