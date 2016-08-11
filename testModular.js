var modular = require('./modular');
modular(process.argv[2], process.argv[3], function(err, data){
  if(err) return console.log("Error");
  data.forEach(function(file){
    console.log(file);
  });
});
