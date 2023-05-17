"use strict";

let userInfo = {
  name: "Tobi",
  location: "PH",
  gender: "Male",
};
console.log(userInfo.name); // getting the value "Tobi" from the object userInfo
userInfo["gender"]; // when you're using the [] square bracket method you must "" together with the key you want to access

const car = {
  "brand name": "Toyota",
  model: "Corolla sport",
  year: 2017
};
console.log(car["brand name"]); // output = Toyota

const scores = {};
scores.physics = 80; // adding key values to the object
scores.physics = 92; // adding key values to the object
scores.bio = 42; // adding key values to the object

let user = {};
(user["name"] = "Tobi"),
  (user["age"] = 17),
  (user["likes fruit"] = true),
  (user.location = "Lagos");

let user2 = { name: "John", age: 30 };
let key = prompt("What do you want to know about the user");
console.log(user2[key]);
let location2 = prompt("Your city? ");
user["city"] = location2;
let gender = prompt("Male or Female", "Male");
user[gender] = gender;


// a template for creating object
function createUser(name, age, gender, location) {
  return {
    name: name,
    age: age,
    gender: gender,
    location: location,
  };
}
let john = createUser('John',30,'male','PH')


function Hotel(name,location){
    this.name = name;
    this.location = location;
}
let hotel = new Hotel("Novatel","Lagos");
console.log(hotel)

// iterating through an object
let myCar ={'brand name': "Toyota", model:"Camry", year:2017, condition: "new"}
for (let k in myCar){
  console.log(k + ':' + myCar[k]);
} //console.log(`${k} : ${myCar[k]}`);