const pelican = require('./index');

const array = [1, 2, 3, 4, 5];
pelican.forEach(array, (number, cb) => {
  console.log(number);
  cb(); // call to go to the next object.
}, () => {
  console.log('Done');
});
