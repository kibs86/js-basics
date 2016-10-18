'use strict';

const ask = require('../lib/ask.js');

let count = 0;
let answer = '';

while (answer !== 'Jeff') {
  answer = ask('Guess my name? ');
  count++;
}

console.log('You got it in ' + count + ' tries!');
