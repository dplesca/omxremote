var gh = require('grasshopper'),
	request = require('request'),
	omx = require('omxcontrol'),
	fs = require('fs');

var path = '/media/768E92E48E929BE5/', files = fs.readdirSync(path);
console.log('test' + files.length);

gh.get('/', function() {
	var nr_files = files.length;
	for( i = 0; i < nr_files; i++ ){
		this.model['files'].push({"file" : files[i]});
	}
	this.model['files'] = files;
	this.render('index');
});
gh.serve(8080);

/*omx.start(filename);

omx.pause();

omx.quit();*/
