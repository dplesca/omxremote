var gh = require('grasshopper'),
	request = require('request'),
	omx = require('omxcontrol'),
	fs = require('fs');

var path = '/media/768E92E48E929BE5/';
console.log('test' + files.length);

gh.get('/', function() {
	this.model['files'] = [];
	var self = this;
	var fs = require('fs');
	var traverseFileSystem = function (currentPath, self) {
	
		var files = fs.readdirSync(currentPath);
		for (var i in files) {
			var currentFile = currentPath + '/' + files[i];
			var stats = fs.statSync(currentFile);
			if (stats.isFile()) {
				self.model['files'].push({"file" : files[i], "hash": new Buffer(currentFile).toString('base64')});
				//console.log(currentFile);
			}
			else if (stats.isDirectory()) {
	 			traverseFileSystem(currentFile);
			}
		}
	};
	traverseFileSystem(path, self);
	
	this.model['files'] = files;
	this.render('index');
});

gh.get('/file/{name}', function(args) {
    this.model['name'] = new Buffer(args.name, 'base64').toString('ascii');
    this.render('file');
    this.renderText('1');
});

gh.post('/file/{name}/start', function(args) {
	var filename = path + new Buffer(args.name, 'base64').toString('ascii');
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
