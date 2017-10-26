const pelican = require('./index');
const array = [1, 2, 3, 4, 5];
pelican.forEach(array, function(number, cb){
  console.log(number);
  cb(); // call to go to the next object.
}, function(){
  console.log('Done');
})
