var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req,res){
  if(req.method == 'POST'){
    req.pipe(map(function(data){
      return data.toString().toUpperCase();
    })).pipe(res);
  }
  return "POST request required";
});
server.listen(process.argv[2]);
