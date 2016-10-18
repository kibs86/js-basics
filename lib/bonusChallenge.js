/* designing your own script that runs something using two or more examples
of flow control we've introduced today! */

'use strict';

const ask = require('../lib/ask.js');

let number = Number(ask("Guess my number. Hint: It's between 1 and 100. "));
let count = 1;

while (number !== 13) {
  if (number < 1 || number > 100) {
    console.log("Did you read my hint?");
  } else if (number < 13) {
    console.log("Higher.");
  } else {
    console.log("Lower.");
  }
  number = Number(ask("Guess again. "));
  count++;
}

console.log("You guessed it in " + count + " tries.");
