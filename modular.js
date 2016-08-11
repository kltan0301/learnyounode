var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, fileExten, callback){
  fs.readdir(directoryName, function(err,list){
    
    if(err) return callback(err);

    list = list.filter(function(file){
      return path.extname(file) === "." + fileExten;
    });
    return callback(null, list);
  });
};
