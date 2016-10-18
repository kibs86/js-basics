/* Try building your own script in the /lib directory titled guessMyAge.js.
Have this script ask the user their age, and if they're older than 90 print
to the console "You old fart!" If they're under the age of 10 print
"Why are you on a computer? Go outside!" If they're between 10 and 90,
print "How boring...". */

'use strict';

const ask = require('../lib/ask.js');

let age = ask("How old are you? ");

if (age > 90) {
  console.log("You old fart!");
} else if (age < 10 ) {
  console.log("Why are you on a computer? Go outside!");
} else {
  console.log("How boring...");
}
