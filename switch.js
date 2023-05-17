"use strict";

let x = "Hello";
switch (x) {
  case 45: // if (x === 45)
    console.log("That's a number");
    break;
  case "Hello": //if (x === "Hello")
    console.log("That's a word");
    break;
  default:
    console.log("Invalid entry");
}

let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log("2,3");
}
