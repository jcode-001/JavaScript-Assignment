"use strict";
/* Challenges 12-19: If statements*/

/*012. Ask for two numbers. If the first one is larger than 
the second, display the second number first and then the first 
number, otherwise show the first number first and then the second. 
*/
let num1, num2;
num1 = Number(prompt("Enter a number"));
num2 = Number(prompt("Enter another number"));
if (num1 > num2) {
  console.log(num2, num1);
} else {
  console.log(num1, num2);
}

/* 013. Ask the user to enter a number that is under 20. 
If they enter a number that is 20 or more, display the message 
“Too high”, otherwise display “Thank you”. 
*/
let numBelow20 = Number(prompt("Enter a number below 20:"));
if (numBelow20 >= 20) {
  console.log("Too high!");
} else {
  console.log("Thank you");
}

/* 014. Ask the user to enter a number between 10 and 20 (inclusive).
If they enter a number within this range, display the message
“Thank you”, otherwise display themessage “Incorrect answer”.
*/
let num = Number(prompt("Enter a number between 10 and 20"));
if (num > 10 && num < 20) {
  console.log("Thank you");
} else {
  console.log("Incorrect answer");
}

/*015. Ask the user to enter their favourite colour. If they enter “red”, “RED” or
“Red” display the message “I like red too”, otherwise display the message
“I don’t like [colour], I prefer red”.
*/
let colour = prompt("Enter your favourite colour");
if (colour === "red" || colour === "Red" || colour === "RED") {
  alert("I like red too");
} else {
  alert(`I don't like ${colour}, i prefer red`);
}

/*016. Ask the user if it is raining and convert their answer to lower case
so it doesn’t matter what case they type it in. If they answer “yes”,
ask if it is windy. If they answer “yes” to this second question,
display the answer “It is too windy for an umbrella”, otherwise
display the message “Take an umbrella”. If they did not answer yes
to the first question, display the answer “Enjoy your day”. 
*/
let isitRainy = prompt("Is it rainy? ");
isitRainy.toLowerCase();
if (isitRainy === "yes") {
  let isitWindy = prompt("Is it windy?");
  if (isitWindy === "yes") {
    console.log("It is too windy for an umbrella");
  } else {
    console.log("Take an umbrella");
  }
} else {
  console.log("Enjoy your day");
}

/*017. Ask the user’s age. If they are 18 or over, display the
message “You can vote”, if they are aged 17, display the message 
“You can learn to drive”, if they are 16, display the message 
“You can buy a lottery ticket”, if they are under 16, display the
message “You can go Trickor-Treating”. 
*/
let age = Number(promp("Your age"));
if (age >= 18) {
  console.log("You can vote");
} else if (age === 17) {
  console.log("You can learn to drive");
} else if (age === 16) {
  console.log("You can buy a lottery ticket");
} else if (age <= 16) {
  console.log("You can go Trick-or-Treating");
}

/*018. Ask the user to enter a number. If it is under 10,display 
the message “Too low”, if their number is between 10 and 20, display “Correct”, otherwise
display “Too high”
*/
let number = Number(prompt("Enter a number"));
if (number < 10) {
  console.log("Too low");
} else if (numbwer > 10 && number < 20) {
  console.log("Correct");
} else {
  console.log("Too high");
}

/*019. Ask the user to enter 1, 2 or 3. If they enter a 1, display the 
message “Thank you”, if they enter a 2, display “Well done”, 
if they enter a 3, display “Correct”. If they enter anything else, display “Error message”. 
*/
let numm;
switch (numm) {
  case 1:
    console.log("Thank you");
    break;
  case 2:
    console.log("Well done");
    break;
  case 3:
    console.log("Correct");
    break;
  default:
    console.log("Error message");
    break;
}

// BONUS 01
let question = prompt(
  "What is the 'official' name of Javascript? ",
  "ECMAScript"
);
if (question === "ECMAScript") {
  alert("Right");
} else {
  alert("You don't know? 'ECMAScript'!");
}

// BONUS 02
let userNum = +prompt("Enter a number");
if (userNum > 0) {
  alert("1");
} else if (userNum < 0) {
  alert("-1");
} else if (userNum === 0) {
  alert("0");
}

//  BONUS 03
// rewrie: if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
let a = 1;
let b = 1;
let result;
a + b < 4 ? (result = "Below") : (result = "Over");

// BONUS 04
let message, login;
message =
  login === "Employee"
    ? (message = "Hello")
    : login === "Director"
    ? (message = "Greetings")
    : login === ""
    ? (message = "No login")
    : (message = "");

// BONUS 05
let userAge = 19;
userAge >= 14 && userAge <= 90
  ? console.log("Approved. Age is " + userAge)
  : console.log("");

//BONUS 06
let loginn = prompt("Who's there?", "");
if (loginn === "Admin") {
  let loginPassword = prompt("Enter your password");
  if (loginPassword === "The Master") {
    console.log("Welcome");
  } else if (loginPassword !== "The Master") {
    console.log("Wrong password");
  } else if (loginPassword === null) {
    console.log("Canceled");
  }
} else if (loginn === "" || loginn === null) {
  console.log("Canceled");
} else if (loginn !== "Admin") {
  console.log("I don't know you");
}
