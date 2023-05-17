"use strict";

// 001
const logicalColor = (x,y) => {
  if (x === true) {
    console.log("Red");
  } else if (y === false) {
    console.log("Yellow");
  } else if (x === true && y === false) {
    console.log("Blue");
  }
};
logicalColor(true, false);
