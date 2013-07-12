var express = require('express');

var app = express.createServer(express.logger());

//fs.readFileSync('./index.html',function(err,data){
//	if (err) {
//		throw err;
//	}
//	content= data;
//	console.log(content);
//	processFile(); 
//}
//var buf = new Buffer('test');
//var json = JSON.stringify(buf);

//console.log(json);
// '[116,101,115,116]'

//var copy = new Buffer(JSON.parse(json));

//console.log(copy);

app.get('/', function(request, response) {
  response.send('Hello World2!');
  var index=fs.readFileSync('index.html');
  var string=indexHtml.toString('utf-8');
  response.send(string);
// response.send(copy);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
