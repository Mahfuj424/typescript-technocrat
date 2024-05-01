"use strict";
//  ternary operator || optional chaining || nullish coalescing operator
const age = 18;
if (age >= 18) {
    //   console.log("you are a adult person");
}
else {
    //   console.log("you are not adult person");
}
const isAdult = age >= 18 ? 'adult' : "not adult";
// console.log(isAdult);
const checkAdult = null;
const result = checkAdult !== null && checkAdult !== void 0 ? checkAdult : 'adult';
console.log(result);
