"use strict";
/*Programming Exercise (While Loops) */

// 001
let i = 1;
while (i < 51) {
  console.log(i);
  i++;
}

// 002. (a)
const myString = "Josiah";
let j = 0;
while (j < myString.length) {
  console.log(myString[j]);
  j++;
}
// (b)
const myString2 = "ThankGod";
let k = 1;
while (k < myString.length) {
  console.log(myString[k]);
  k++;
  k += 1;
}

// 003
while (true) {
  let kilo = +prompt("Enter a weight in kilogram");
  if (!kilo) break;
  if (kilo < 0) {
    console.log("Inavlid Entry");
    continue;
  }
  const pounds = 2.504 * kilo;
  console.log(`${kilo} kg is: ${pounds} pounds`);
}

// 004.
let passowrd = 4567;
let userPassword = prompt("Enter your password");
if (userPassword === passowrd) {
  console.log("You're logged in!");
} else {
  let i = 0;
  while (i < 4) {
    let userPassword = prompt("Reenter your password");
    if (passowrd === userPassword) {
      console.log("You're logged in.");
      break;
    } else if (passowrd !== userPassword && i === 3) {
      console.log("You're kicked off the system");
    }
    i++;
  }
}


// 005
