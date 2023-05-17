"use strict";
/* Challenges 45-51: While Loop*/

/*045. Set the total to 0 to start with. While the total is 50 or less, ask
the user to input a number. Add that number to the total and
print the message “The total is… [total]”. Stop the loop when
the total is over 50. 
*/
let total = 0;
while (total <= 50) {
  let inputNumber = Number(prompt("Enter a number less than 50"));
  total += inputNumber;
}
console.log("The total is", total);

/*046. Ask the user to enter a number. Keep asking until they enter
a value over 5 and then display the message “The last number
you entered was a [number]” and stop the program. 
*/
// let inputNumber2 = Number(prompt("Enter a number"));
while (true) {
  let inputNumber2 = Number(prompt("Enter a number"));
  if (inputNumber2 >= 5) {
    let bigNum = inputNumber2;
    console.log(`The last number you entered was ${bigNum}`);
    break;
  }
}

/*047. Ask the user to enter a number and then enter another number.
Add these two numbers together and then ask if they want to add
another number. If they enter “y", ask them to enter another number 
and keep adding numbers until they do not answer “y”. Once the
loop has stopped, display the total.
*/
let firstNum = Number(prompt("Enter a number"));
let secondNum = Number(prompt("Enter another number"));
let total2 = firstNum + secondNum;
let question = prompt("Do you want to add another number? ");
if (question) {
  while (question === "y") {
    let newNum = Number(prompt("Enter the  number? "));
    let question = prompt("Do you want to add another number? ");
    total2 += newNum;
    if (question === "") break;
  }
}
console.log(total2);

/*048. Ask for the name of somebody the user wants to invite to a
party. After this, display the message “[name] has now been invited” 
and add 1 to the count. Then ask if they want to invite somebody else.
Keep repeating this until they no longer want to invite anyone else to the
party and then display how many people they have coming to the party. 
*/
let counter = 0;
let party = prompt("Who are you inviting to your party?");
console.log(party, "has now been invited.");
counter += 1;
while (true) {
  let question2 = prompt("Are you inviting anyone else?");
  if (question2 === "yes") {
    let party = prompt("Who are you inviting to your party?");
    console.log(party, "has now been invited.");
    counter += 1;
  } else if (question2 === "no") break;
}
console.log(`${counter} persons were invited to the party.`);

/*049. Create a variable called compnum and set the value to 50.
Ask the user to enter a number. While their guess is not the same as
the compnum value, tell them if their guess is too low or too high and ask 
them to have another guess. If they enter the same value as compnum, 
display the message “Well done, you took [count] attempts”
*/
const compNum = 50;
let attempt = 0;
while (true) {
  let guess = Number(prompt("Guess a number"));
  attempt += 1;
  if (guess === compNum) {
    console.log(`Well done, you took ${attempt} attempts.`);
    break;
  } else if (guess > compNum) console.log("Too high");
  else if (guess < compNum) console.log("Too low");
}

/*050. Ask the user to enter a number between 10 and 20. 
If they enter a value under 10, display the message “Too low” and ask
them to try again. If they enter a value above 20, display the message “Too high”
and ask them to try again. Keep repeating this until they enter a value that is
between 10 and 20 and then display the message “Thank you”.
*/
while (true) {
  let btw20 = Number(prompt("Enter a number between 10 and 20"));
  if (btw20 > 10 && btw20 < 20) {
    console.log("Thank you");
    break;
  } else if (btw20 > 20) {
    console.log("Too high");
    let btw20 = Number(prompt("Enter a number between 10 and 20"));
  } else if (btw20 < 10) {
    console.log("Too low");
    let btw20 = Number(prompt("Enter a number between 10 and 20"));
  }
}

/*051. Using the song “10 green bottles”, display the lines “There are [num] green bottles
hanging on the wall, [num] green bottles hanging on the wall, and if 1 green bottle
should accidentally fall”. Then ask the question “how many green bottles will be
hanging on the wall?” If the user answers correctly, display the message “There will be
[num] green bottles hanging on the wall”. If they answer incorrectly, display the
message “No, try again” until they get it right. When the number of green bottles gets
down to 0, display the message “There are no more green bottles hanging on the wall”. 
*/
let num = 10;
console.log(
  `There are ${num} green bottles hanging on the wall, ${num} green botles hanging on the wall,`
);
while (num) {
  let answer = Number(
    prompt(
      "and if 1 green bottles should accidentaly fall, How many green bottles will be hanging on the wall? "
    )
  );
  if (answer === num - 1) {
    console.log("There will be", num - 1, "green bottles hanging on the wall.");
    num += -1;
  } else if (answer !== num - 1) {
    console.log("No try again");
  }
}
console.log(num);
