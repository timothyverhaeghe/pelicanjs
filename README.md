# PelicanJS
Collection of variables &amp; array functions. Feel free to add your own.

## 1. Use it
```bash
npm install pelicanjs
```

## 2. Documenation
### 2.1. Async foreach
```js
const pelican = require('pelicanjs');
const array = [1, 2, 3, 4, 5];
pelican.forEach(array, function(number, cb){
  console.log(number);
  cb(); // call to go to the next object.
}, function(){
  console.log('Done');
})
```

### 2.2. Capitalize first Letter
```js
// capitalize
const pelican = require('pelicanjs');
const string = 'belgium';
const capitalized = pelican.capitalize(string);
console.log(capitalized) // Belgium
```

### 2.3. Sort array of objects
```js
// objectSort
const pelican = require('pelicanjs');
const array = [{id: 1}, {id: 3}, {id: 2}];
const sorted = pelican.median(array, 'id');
console.log(sorted)
```

### 2.4. Calcualte median of array
```js
// median
const pelican = require('pelicanjs');
const array = [1, 2, 3, 4, 5];
const median = pelican.median(array);
console.log(median)
```

### 2.5. parseJSON
```js
// median
const pelican = require('pelicanjs');
const wrongJSON = "";
const json = pelican.parseJSON(wrongJSON);
console.log(json) // will output {} instead of crashing.
```

## 3. Copyright
MIT License

Copyright (c) 2017 [Timothy Verhaeghe](https://github.com/timothyverhaeghe)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
