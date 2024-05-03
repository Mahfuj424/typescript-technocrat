"use strict";
// Learning Functions
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(3, 5);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: 'mahfuj',
    balance: 0,
    add(balance) {
        return this.balance + balance;
    }
};
const arr = [1, 3, 4, 6];
const newArray = arr.map((element) => element * element);
