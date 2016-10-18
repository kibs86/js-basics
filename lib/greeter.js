'use strict';

const ask = require('../lib/ask.js');   //calling to get user input

let name = ask("What's your name? ");

if (name === 'Rachel') {
  console.log('Hi, Rachel!');
} else if (name === 'Antony') {
  console.log('Hi, Antony!');
} else if (name === 'Ben') {
  console.log('Hi, Ben!');
} else {
  console.log('Hi, stranger.');
}
