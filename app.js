var express = require('express'),
    omx = require('omxcontrol'),
    mediaPath = '.',
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


app.listen(31415);

console.log('omxremote launched on port 31415');
