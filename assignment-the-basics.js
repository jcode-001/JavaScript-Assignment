"use strict";
/* Challenges 1-11: The Basics*/

/* 001. Ask for the user’s first name and display the output message*/
let firstName1 = prompt("First Name: ");
console.log(`Hello ${firstName1}`);

/* 002. Ask for the user’s first name and then ask for
 their surname and display the output message
*/
let firstName2 = prompt("First Name: ");
let surName1 = prompt("Surname");
console.log(`Hello ${firstName2} ${surName1}`);

/* 003. Write code that will display the joke “What do you call a bear with no
teeth?” and on the next line display the answer “A gummy bear!” Try to
create it using only one line of code. 
*/
console.log("What do you call a bear with no teeth?",end='\n',"A gummy bear!")

/**004. Ask the user to enter two numbers. Add
them together and display the answer as
*/
let num1 = Number(prompt("Firsst Number: "));
let num2 = Number(prompt("Second Number"));
let value = num1 + num2;
console.log(`The total is ${value}`)

/* 005. Ask the user to enter three numbers. Add together the first
two numbers and then multiply this total by the third
*/
let num3 = Number(prompt("Firsst Number: "));
let num4 = Number(prompt("Second Number"));
let num5 = Number(prompt("Third number"))
let value2 = (num3 + num4) * num5;
console.log(`The answer is: ${value2}`)

/**006. Ask how many slices of pizza the user started with and ask how many 
slices they have eaten. Work out how many slices they have left and display the
answer in a userfriendly format. 
*/
let pizzaStart = Number(prompt("How many slices of pizza did you start with? "));
let pizzaEaten = Number(prompt("How many slices left? "));
let pizzaLeft = pizzaStart - pizzaEaten;
console.log(`You have ${pizzaLeft} slices of pizza left.`)

/**007. Ask the user for their name and their age. Add 1 to their age
and display the output.
*/
let userName = prompt("What's your name? ");
let userAge = Number(prompt("Age: "));
let newAge = userAge + 1;
console.log(`${userName} next birthday you will be ${newAge}.`)

/**008. Ask for the total price of the bill, then ask how
many diners there are. Divide the total bill by the
number of diners and show how much each person must pay. 
 */
let totalPrice = Number(prompt("Total price of bill: "));
let noOfDiners = Number(prompt("How many diners? "));
let eachPay = totalPrice / noOfDiners;
console.log(`Each person on the table will pay $${eachPay} for their meal.`)

/* 009. Write a program that will ask for a number of days and then will show how many
hours, minutes and seconds are in that number of days. 
*/
let noOfDays= Number(prompt("Enter number of days "));
let hours = 24 * noOfDays;
let minutes = 60 * hours;
let seconds = 60 * minutes;
console.log(`There are ${hours} hours, ${minutes} minutes, ${seconds} seconds in ${noOfDays} day/days`)

/**010. There are 2,204 pounds in a kilogram. Ask the
user to enter a weight in kilograms and convert it
to pounds. 
*/
let weightKg = prompt("Enter a weight in kg");
let kgToPounds = weightKg * 2.2046;
console.log(`Weight in pounds = ${kgToPounds}`);

/** 011. Task the user to enter a number over 100 and then enter a number under
10 and tell them how many times the smaller number goes into the larger
number in a user-friendly format.
*/
let noAbove100,noBelow10,smallIntoBig;
noAbove100 = Number(prompt("Enter a number above 100"));
noBelow10 = Number(prompt("Enter a number below 10"));
smallIntoBig = noAbove100 / noBelow10;
console.log(`${noAbove100} goes into ${noBelow10} ${smallIntoBig} times`)

