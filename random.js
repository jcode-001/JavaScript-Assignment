"use strict";

/*052. Display a random integer between 1 and 100 inclusive.
 */
let randomNum1 = Math.floor(Math.random() * 100);
console.log(randomNum1);

/*053. Display a random fruit from a list of five fruits
 */
const fruits = [
  "Kiwi",
  "Bannana",
  "Orange",
  "Apple",
  "Mango",
  "Strawberry",
  "Pineapple",
];
let random = Math.floor(Math.random() * fruits.length);
console.log(fruits[random]);

// multiplication game
