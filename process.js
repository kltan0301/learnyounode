var param = process.argv.slice(2,process.argv.length);
console.log(param.reduce(function(prevVal, currVal){
  return parseInt(prevVal) + parseInt(currVal);
}));
