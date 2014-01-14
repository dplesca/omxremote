var express = require('express'),
    exphbs  = require('express3-handlebars'),
    omx = require('omxcontrol'),
    path = '/media/Seagate',
    app = express();

app.use(express.static('assets'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    var r = require('ua-parser').parse(req.headers['user-agent']),
        all_files = [],
        fs = require('fs');
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
    var files = traverseFileSystem(path, all_files), params = {};
    files.sort(function (a, b) {
        return a.file.toLowerCase().localeCompare(b.file.toLowerCase());
    });

    params.files = files;
    if(r.os.family === 'Android'){
        params.layout = 'android';
    }    
    res.render('home', params);
    
});

app.get('/file/:name', function(req, res){
    var params = {}, r = require('ua-parser').parse(req.headers['user-agent']);
    params.name = new Buffer(req.params.name, 'base64').toString('ascii');
    params.hash = req.params.name;
    if(r.os.family === 'Android'){
        params.layout = 'android';
    }
    res.render('file', params);
});

app.post('/file/:name/start', function(req, res) {
    var filename = new Buffer(req.params.name, 'base64').toString('ascii');
    omx.start(filename);
    res.send(200);
});

app.post('/file/:name/pause', function(req, res) {
    omx.pause();
    res.send(200);
});

app.post('/file/:name/play', function(req, res) {
    omx.pause();
    res.send(200);
});

app.post('/file/:name/stop', function(req, res) {
    omx.quit();
    res.send(200);
});

app.post('/file/:name/forward', function(req, res) {
    omx.forward();
    res.send(200);
});
app.post('/file/:name/backward', function(req, res) {
    omx.backward();
    res.send(200);
});
app.post('/file/:name/subs', function(req, res) {
    omx.subs();
    res.send(200);
});


app.listen(31415);

console.log('omxremote launched on port 31415');
