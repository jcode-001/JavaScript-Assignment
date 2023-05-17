"use strict";

/*001. Write a program that asks the user to enter a length in centimeters. If the user enters a
negative length, the program should tell the user that the entry is invalid. Otherwise, the
program should convert the length to inches and print out the result. There are 2.54
centimeters in an inch.
*/
let cmLength = +prompt("Enter a number in centimeter");
if (cmLength < 0) {
  console.log("Your entry is invalid");
} else if (cmLength >= 0) {
  let inch = cmLength * inch;
  console.log(`${cmLength} is equal to ${inch} inch`);
}

/*002. Ask the user for a temperature. Then ask them what units, Celsius or Fahrenheit, the
temperature is in. Your program should convert the temperature to the other unit. The
conversions are F = 9 5 C + 32 and C = 5 9 (F − 32).
*/
let temp = +prompt("Enter a temperature");
let degree = prompt("Celsuis or Fahrenheit").toLowerCase();
if (degree === "celsuis") {
  let fahrenheit = (9 / 5) * temp + 32;
  console.log(`In Fahrenheit, that is ${fahrenheit}`);
} else if (degree === "fahrenheit") {
  let celsius = (5 / 9) * (temp - 32);
  console.log(`In Celsuis, that is ${celsius}`);
} else {
  console.log("Invalid entry");
}

/*003.  Ask the user to enter a temperature in Celsius. The program should print a message based on
the temperature:
• If the temperature is less than -273.15, print that the temperature is invalid because it is
below absolute zero.
• If it is exactly -273.15, print that the temperature is absolute 0.
• If the temperature is between -273.15 and 0, print that the temperature is below freezing. •
If it is 0, print that the temperature is at the freezing point.
• If it is between 0 and 100, print that the temperature is in the normal range.
• If it is 100, print that the temperature is at the boiling point.
• If it is above 100, print that the temperature is above the boiling point.
*/
let tempCelsuis = +prompt("Enter a temperature in celsius");
if (tempCeluis < -273.15) {
  console.log("Temperature is invalid because it is below absolute zero.");
} else if (tempCelsuis === -273.15) {
  console.log("The temperature is absollute zero.");
} else if (tempCelsuis > -273.25 && tempCelsuis < 0) {
  console.log("The temperature is below freezing.");
} else if (tempCelsuis === 0) {
  console.log("The temperature is at the freezing point.");
} else if (tempCelsuis > 0 && tempCelsuis < 100) {
  console.log("The temperature is in the normal range.");
} else if (tempCelsuis === 100) {
  console.log("The temperature is at the boiling point.");
} else if (tempCelsuis > 100) {
  console.log("The temperature is above the boiling point.");
}

/*004. Write a program that asks the user how many credits they have taken. If they have taken 23
or less, print that the student is a freshman. If they have taken between 24 and 53, print that
they are a sophomore. The range for juniors is 54 to 83, and for seniors it is 84 and over. 4.5.
*/
let creditsTaken = +prompt("How many credits have you taken");
if (creditsTaken <= 23) {
  console.log("You're are a freshman.");
} else if (creditsTaken >= 24 && creditsTaken <= 53) {
  console.log("You're a sophomore.");
} else if (creditsTaken >= 54 && creditsTaken <= 83) {
  console.log("You're a junior.");
} else if (creditsTaken >= 84) {
  console.log("You're a senior.");
}

/*005. Generate a random number between 1 and 10. Ask the user to guess the number
and print a message based on whether they get it right or not.
*/
let randomNum = Math.floor(Math.random() * 10 + 1);
let guessNum = +prompt("Guess a number btw 1 and 10");
if (guessNum === randomNum) {
  console.log("Correct! The guess is" + randomNum);
} else if (guessNum !== randomNum) {
  console.log("Wrong guess. Please try again.");
}

/*006.  A store charges $12 per item if you buy less than 10 items. If you buy between 10 and 99
items, the cost is $10 per item. If you buy 100 or more items, the cost is $7 per item. Write a
program that asks the user how many items they are buying and prints the total cost
*/
let items = +prompt("How many items are you buying?");
if (items < 10) {
  console.log("Total cost is $" + items * 12);
} else if (items >= 10 && items <= 99) {
  console.log("Total cost is $", items * 10);
} else if (items >= 100) {
  console.log("Total cost is $", items * 7);
}

/*007. Write a program that asks the user for two numbers and prints Close if the numbers are
within .001 of each other and Not close otherwise. 8. A year is a leap year if it is divisible by 4,
except that years divisible by 100 are not leap years unless they are also divisible by 400. Write
a program that asks the user for a year and prints out whether it is a leap year or not.
*/
let number1 = +prompt("Enter a number");
let number2 = +prompt("Enter another number");
let difference = number1 - number2;
if (difference === 1) {
  console.log("Close");
} else if (difference !== 1) {
  console.log("Not close");
}

/*008. A year is a leap year if it is divisible by 4, except that years
divisible by 100 are not leap years unless they are also divisible by 400. Write
a program that asks the user for a year and prints out whether it is a leap year or not
*/
let year = +prompt("Enter a year");
if (year % 4 === 0 || year % 400 === 0) {
  console.log(year, " is a leap year.");
} else if (year % 100 !== 0) {
  console.log(year, "is not a leap year");
}

/*009. Write a program that asks the user to enter a number and prints out all the divisors of that
number. [Hint: the % operator is used to tell if a number is divisible by something]
*/
let number = +prompt("Enter a number");
let i = 0;
for (i; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

/*010. Write a multiplication game program for kids. The program should give the player ten
randomly generated multiplication questions to do. After each, the program should tell them
whether they got it right or wrong and what the correct answer is.
Question 1: 3 x 4 = 12 Right!
Question 2: 8 x 6 = 44 Wrong. The answer is 48
*/
for (let i = 1; i < 11; i++) {
  let random1 = Math.floor(Math.random() * 11 + 1);
  let random2 = Math.floor(Math.random() * 11 + 1);
  let answer = random1 * random2;
  let question = +prompt(`Question ${i}: ${random1} x ${random2} = `);
  if (question === answer) {
    console.log(`Question ${i}: ${random1} x ${random2} = ${answer} \n Right!`);
  } else if (question !== answer) {
    console.log(
      `Question ${i}: ${random1} x ${random2} = ${question} \n Wrong. The answer is ${answer}`
    );
  }
}

/*011. Write a program that asks the user for an hour between 1 and 12, asks them to enter am or pm,
and asks them how many hours into the future they want to go. Print out what the hour will
be that many hours into the future, printing am or pm as appropriate. An example is shown
below.
*/
let hour = +prompt("Enter hour: ");
let timeOfDay = +prompt("Am (1) or pm (2)?");
let hoursAhead = +prompt("How many hours ahead? ");
let newHour = hour + hoursAhead;
if (timeOfDay === 1 && newHour >= 12) {
  let format12 = newHour - 12;
  console.log(`New hour: ${format12} pm`);
} else if (timeOfDay === 2 && newHour >= 12) {
  let format12 = newHour - 12;
  console.log(`New hour: ${format12} am`);
} else if (timeOfDay === 1 && newHour < 12) {
  console.log(`New hour: ${newHour} am`);
} else if (timeOfDay === 2 && newHour < 12) {
  console.log(`New hour: ${newHour} pm`);
}

/*012. A jar of Halloween candy contains an unknown amount of candy and if you can guess
exactly how much candy is in the bowl, then you win all the candy. You ask the person in charge
the following: If the candy is divided evenly among 5 people, how many pieces would be left
over? The answer is 2 pieces. You then ask about dividing the candy evenly among 6 people,
and the amount left over is 3 pieces. Finally, you ask about dividing the candy evenly among 7
people, and the amount left over is 2 pieces. By looking at the bowl, you can tell that there are
less than 200 pieces. Write a program to determine how many pieces are in the bowl.
*/
let k = 0;
for (k; k < 200; k++) {
  if (k % 5 === 2 && k % 6 === 3 && k % 7 === 2) {
    let candyAmount = k;
    console.log(`There are ${candyAmount} candy in the bowl.`);
  }
}

/*013. Write a program that lets the user play Rock-Paper-Scissors against the computer. There
should be five rounds, and after those five rounds, your program should print out who won and
lost or that there is a tie.
*/
