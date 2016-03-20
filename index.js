var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
	switch (req.method) {
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk) {
				item += chunk;
				console.log(url.parse(req.url));
			});
			req.on('end', function() {
				console.log(item);
				items.push(item);
				res.end('OK\n');
			});
			break;

		case 'GET':
			items.forEach(function(item, i) {
				res.write(i + ') ' + item + '\n');  
			});
			res.end();
			break;
 	}
	
}).listen(8000);