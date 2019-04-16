var http = require('http');
var fs = require('fs');

var server =  http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type': 'text/html'});
   var myReadStream = fs.createReadStream(__dirname + '/index.html');
   myReadStream.pipe(response);
})

server.listen(3500,'127.0.0.1');
console.log('Server is running at port 3500')
