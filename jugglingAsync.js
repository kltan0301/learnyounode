var http = require('http');
var bl = require('bl');
var results = [];
var ttl = 0;

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function(err, data){
      results[index] = data.toString();
      ttl++;
      if (ttl == 3)
        printResults();
    }));
  });
}

for (var i = 0; i < 3; i++){
  httpGet(i);
}
