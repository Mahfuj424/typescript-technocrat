// Learning Functions

// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 5)

// arrow function
const addArrow = (num1: number, num2: number): number=> num1 + num2;


const poorUser = {
  name:'mahfuj',
  balance: 0,
  add(balance: number){
    return this.balance + balance;
  }
}

const arr: number[]= [1,3, 4,6]

const newArray: number[] = arr.map((element: number): number=>element*element)


