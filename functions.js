// Functions
//functions are line of code that allow you to reuse codes we have written before.

function greet(name) {
  // <= this is how you create a function
  console.log(`Hello, ${name}`);
}
greet(Tobi); // this how we run the function <=

function printMessage() {
  let message = "Welcome to frontend development";
  console.log(message);
}

printMessage(); // When the print function is called it prints out the messsage.

// When a variable is declared outside a function it is called  a "Global variable";

// "Local variable" -- variables that declared inside a function.

let message = "Hello";
function showMessage() {
  message = "Hi";
  console.log(message);
}
showMessage();
console.log(message);

// this function prints out the average of a given number
function average(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  const avg = sum / n;
  return avg;
}

const age = (birthYear) => 2023 - birthYear; // arrow function

const age2 = (birthYear) =>{  //arrow function
    return 2023 - birthYear;
}

function age3(birthYear){ //function declaration
    return 2023 - birthYear; 
}

const age4 = function(birthYear){ // function expression
    return 2023 - birthYear;
}