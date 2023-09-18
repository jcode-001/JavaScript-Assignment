"use strict";
/* Challenges 20-26: Strings*/

/* 020. Ask the user to enter their first name and 
then display the length of their name*/
const userName = prompt("Please enter your first name: ", "Bryan");
console.log(userName.length);

/* 021. Ask the user to enter their first name and then ask them to
enter their surname. Join them together with a space between
and display the name and the length of whole name.  */
let firstName, surname;
firstName = prompt("First name");
surname = prompt("Surname");
let lengthOfName = firstName.length + surname.length;
console.log(
  `${firstName} ${surname} the length of your name is ${lengthOfName}`
);

/* 022. Ask the user to enter their first name and surname in lower
case. Change the case to title case and join them together.
Display the finished result. */
let firstName2, surname3, titleCase, names;
firstName2 = prompt("Enter your firstname in lowercase");
surname2 = prompt("Enter your surname in lowercase");
names = firstName2 + " " + surname2;
titleCase = names.toUpperCase();
console.log(titleCase);

/*023. Ask the user to type in the first line of a nursery rhyme and
display the length of the string. Ask for a starting number and an
ending number and then display just that section of the text
(remember Python starts counting from 0 and not 1)
*/
const ryhme = prompt("Type in the first line of nursery ryhme.");
console.log(`length of ryhme is ${ryhme.length}.`);
console.log(ryhme);
let startNum = Number(prompt("Enter a starting number"));
let endNum = Number(prompt("Enter an ending number"));
console.log(ryhme.slice(startNum, endNum));

/* 024. Ask the user to type in any word and display it in upper case. */
let userWord = prompt("Enter any word");
console.log(userWord.toUpperCase());

/* 025. Ask the user to enter their first name. If the length of their 
first name is under five characters, ask them to enter their surname 
and join themtogether (without a space) and display the name
in upper case. If the length of the first name is five or more characters, display their first name in
lower case.*/
let userFirtName = prompt("Your first name ");
if (userFirtName.length < 5) {
  let userSurname = prompt("Your surname ");
  let names = userFirtName + userSurname;
  console.log(names.toUpperCase());
} else if (userFirtName.length >= 5) {
  console.log(userFirtName.toLowerCase());
}

/*026. Pig Latin takes the first consonant of a word, moves it to 
the end of the word and adds on an “ay”. If a word begins with a 
vowel you just add “way” to the end. For example, pig becomes igpay,
banana becomes ananabay, and aadvark becomes aadvarkway. Create a 
program that will ask the user to enter a word and change it into Pig Latin.
Make sure the new word is displayed in lower case
*/
