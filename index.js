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
			});
			req.on('end', function() {
				console.log(item);
				items.push(item);
				res.end('OK\n');
			});
			break;

		case 'GET':
			var body = items.map(function(item, i) {
				return (i + ')' + item);
			}).join('\n');
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			res.end(body);
			// items.forEach(function(item, i) {
			// 	res.write(i + ') ' + item + '\n');  
			// });
			// res.end();
			break;

		case 'DELETE':
			var path = url.parse(req.url).pathname;
			var i = parseInt(path.slice(1), 10);
			if (isNaN(i)) {
				res.statusCode = 400;
				res.end('Invalid item id!');
			} else if(!items[i]) {
				res.statusCode = 404;
				res.end('Item not found!');
			} else {
				items.splice(i, 1);
				res.end('OK\n');
			}
			break;

		case 'PUT':
			var path = url.parse(req.url).pathname;
			var i =parseInt(path.slice(1), 10);
			var item = '';
			req.setEncoding = 'utf8';
			req.on("data", function(chunk) {
				item += chunk;
			});
			if (isNaN(i)) {
				res.statusCode = 400;
				res.end('Invalid item id!');
			} else if(!items[i]) {
				res.statusCode = 404;
				res.end('Item not found!');
			} else {
				items[i] = '';
				req.on('end', function() {
					items[i] = item;
					res.end('OK\n');
				})
			}
			break;
 	}
	
}).listen(8000);