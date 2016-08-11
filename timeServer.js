var net = require('net');
console.log(process.argv[2]);
var server = net.createServer(function(socket){
  var date = new Date();
  var currentMonth = date.getMonth()+1;
  var month =  currentMonth < 10 ? "0" + currentMonth : currentMonth;
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  var data = date.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes;
  socket.write(data);
  socket.end("\n");
});
server.listen(process.argv[2]);
