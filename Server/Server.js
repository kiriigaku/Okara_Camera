var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {

	var url = req.url;
	if(url === '/'){
		url = '../Client/index.html';
	}	

	var data = null;
	content = fs.readFileSync(url, 'utf8');

  	res.end(content);
});
server.listen(3000);

console.log("server running");
