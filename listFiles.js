var fs = require('fs');
var path = process.argv[2];
var search = "." + process.argv[3];

fs.readdir(path, function(err, list){
  var filterList = list.filter(function(value, index){
    if(value.indexOf(search) >= 0){
      return true;
    }
    return false;
  });
  filterList.forEach(function(element){
    console.log(element);
  });
});
