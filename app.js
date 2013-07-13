var gh = require('grasshopper'),
	request = require('request'),
	omx = require('omxcontrol'),
	fs = require('fs');


//configuration
var path = '/home/pi/finished/';
gh.configure({
    viewsDir: 'views',
    layout: 'template'
});

gh.get('/', function() {
	var all_files = [];
	var fs = require('fs');
	var traverseFileSystem = function (currentPath, all_files) {
	
		var files = fs.readdirSync(currentPath);
		for (var i in files) {
			var currentFile = currentPath + '/' + files[i];
			var stats = fs.statSync(currentFile);
			if (stats.isFile() &&  files[i].match(/(.+).(mkv|mp4|avi)$/)) {
				all_files.push({"file" : files[i], "hash": new Buffer(currentFile).toString('base64')});
				//console.log(currentFile);
			}
			else if (stats.isDirectory()) {
	 			traverseFileSystem(currentFile, all_files);
			}
		}
		return all_files;
	};
	this.model['files'] = traverseFileSystem(path, all_files);
	//console.log(this.model['files']);
	this.render('index');
});

gh.get('/file/{name}', function(args) {
    this.model['name'] = new Buffer(args.name, 'base64').toString('ascii');
    this.model['hash'] = args.name;
    console.log(this.model['name']);
    this.render('file');
    this.renderText('1');
});

gh.post('/file/{name}/start', function(args) {
	var filename = new Buffer(args.name, 'base64').toString('ascii');
	omx.start(filename);
	this.renderText('1');
});

gh.post('/file/{name}/pause', function(args) {
	omx.pause();
	this.renderText('1');
});

gh.post('/file/{name}/play', function(args) {
	omx.pause();
	this.renderText('1');
});

gh.post('/file/{name}/stop', function(args) {
	omx.quit();
	this.renderText('1');
});
gh.serve(8080);

/*omx.start(filename);

omx.pause();

omx.quit();*/
