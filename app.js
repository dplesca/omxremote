var gh = require('grasshopper'),
	request = require('request'),
	omx = require('omxcontrol'),
	fs = require('fs');

var path = '/media/768E92E48E929BE5/', files = fs.readdirSync(path);
console.log('test' + files.length);

gh.get('/', function() {
	this.model['files'] = [];
	var nr_files = files.length;
	for( i = 0; i < nr_files; i++ ){
		this.model['files'].push({"file" : files[i]});
	}
	this.model['files'] = files;
	this.render('index');
});

gh.get('/file/{name}', function(args) {
    this.model['name'] = args.name;
    this.render('file');
});

gh.post('/file/{name}/play', function(args) {
	var filename = path + args.name.replace(/~/g, ".");
	omx.start(filename);
});

gh.post('/file/{name}/pause', function(args) {
	var filename = path + args.name.replace(/~/g, ".");
	omx.pause();
});

gh.serve(8080);

/*omx.start(filename);

omx.pause();

omx.quit();*/
