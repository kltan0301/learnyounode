var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
  var obj = url.parse(req.url,true);
  var date = new Date(obj.query.iso.toString());
  var retObj;

  if(obj.pathname === "/api/parsetime"){
    retObj = {
      'hour':date.getHours(),
      'minute':date.getMinutes(),
      'second':date.getSeconds()
    };
  }else{
    retObj = {
      'unixtime':date.getTime()
    };
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(retObj));
});
server.listen(process.argv[2]);
