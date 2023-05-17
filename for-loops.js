"use strict";
/* Challenges 35-44: For Loop*/

/*035. Ask the user to enter their name and then display their name three times.
 */
let username = prompt("Enter your name");
let i = 0;
for (i; i < 4; i++) {
  console.log(username);
}

/* 036. Alter program 035 so that it will ask the user to enter their
name and a number and then display their name that number of times.
*/
let username2 = prompt("Enter your name");
let noOfTimes = Number(prompt("How many times should your name be printed? "));
let j = 0;
for (j; j < noOfTimes; i++) {
  console.log(username2);
}

/*037. Ask the user to enter their name and display each letter in
their name on a separate line. 
*/
const userName = prompt("Enter your name");
for (let i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}

/*038. Change program 037 to also ask for a number. Display their
name (one letter at a time on each line) and repeat this for the
number of times they entered. 
*/
const userName2 = prompt("Enter your name");
const times = Number(prompt("Enter a number"));
for (let i = 0; i < times; i++) {
  console.log(userName[i]);
}

/*039. Ask the user to enter a number between 1 and 12 and 
then display the times table for that number. 
*/
const number = Number(prompt("Enter a number btw 1 and 12"));
let k = 1;
for (k; k < 13; k++) {
  console.log(number + " * " + k + " = " + number * k);
}

/*040. Ask for a number below 50 and then count down from 50 to 
that number, making sure you show the number they entered in the output. 
*/
let numberDown = Number(prompt("Enter a number below 50"));
let n = 50;
for (n; n >= numberDown; n--) {
  console.log(n);
}

/*041. Ask the user to enter their name and a number. If the
number is less than 10, then display their name that number of 
times; otherwise display the message “Too high” three times. 
*/
const username3 = prompt("name: ");
const usernumber = Number(prompt("Enter a number: "));
if (usernumber < 10) {
  for (let q = 0; q < usernumber; q++) {
    console.log(username3);
  }
} else {
  for (let q = 0; q < 4; q++) {
    console.log("Too high!");
  }
}

/*042. Set a variable called total to 0. Ask the user to enter five
numbers and after each input ask them if they want that number included. 
If they do, then add the number to the total. If they do not want it included,
don’t add it to the total. After they have entered all five numbers, display the total. 
*/
let toatal = 0;
for (let w = 0; w < 6; w++) {
  let fiveNum = Number(prompt("Enter a number"));
  confirm("Do you want that nhumber be included?");
  if (confirm) {
    total += fiveNum;
  } else {
  }
}
console.log("Total:" + total);

/*043. Ask which direction the user wants to count (up or down). If they select up, then ask
them for the top number and then count from 1 to that number. If they select down, ask
them to enter a number below 20 and then count down from 20 to that number. If they
entered something other than up or down, display the message “I don’t understand”. 
*/
let userDirection = prompt("Are you counting up or down? ");
if (userDirection === "Up" || userDirection === "up") {
  let topNum = Number(prompt("What is the top nuber? "));
  for (let index = 1; index <= topNum; index++) {
    console.log(index);
  }
} else if (userDirection === "down") {
  let below20 = Number(prompt("Enter a number below 20"));
  for (let index = 20; index > below20; index--) {
    console.log(index);
  }
} else {
  console.log("I don't understand");
}

/*044. Ask how many people the user wants to invite to a party. If they enter a number below
10, ask for the names and after each name display “[name] has been invited”. If they
enter a number which is 10 or higher, display the message “Too many people”. 
*/
let partyNo = Number(prompt("How many people are you inviting to the party?"));
if (partyNo < 10) {
  for (i = 0; i < partyNo; i++) {
    let invitees = prompt("Enter their names");
    console.log(`${invitees} has been invited`);
  }
} else if (partyNo >= 10) {
  console.log("Too many people");
} else {
  console.log("Ann error occured.. Try agian.");
}

// BONUS 01
// write a program using a for loop to print out even numbers from 2 to 10\
for (let k = 0; k < 11; k++) {
  if (k % 2 === 0) {
    console.log(i);
  }
}

//BONUS 02
let r = 0;
while (r) {
  alert(`Number ${i}!`);
  r++;
}

// BONUS 03
while (true) {
  let num = +prompt("Enter a number above 100", "");
  if (num > 100 || num === null) {
    break;
  } else continue;
}

//BONUS 04
"use strict";
for (let l = 2; l < 10; l++) {
  if (l % 2 !== 0) {
    console.log(l);
  }
}
