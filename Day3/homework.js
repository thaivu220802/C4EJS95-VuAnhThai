// 1a. Variable swap with temporary variables

let a = 5;
let b = 6;
let temp = 0;

temp = a;
a = b;
b = temp;

console.log(a, b);

// 1b. Variable swap WITHOUT temporary variables (destructuring approach)

let a = 5;
let b = 6;

[a, b] = [b, a];

console.log(a, b);

// 2. Split string into array using .split()

const splitString = prompt("Enter a string:");
const splitArr = splitString.split(" ");
console.log(splitArr);

// 3. use ... to log an array without using loops
let testArr = [3, 2, 4, 5, 6, 1, 4];
console.log(...testArr);

//4.	Write a script to simulate a clothes shop, asking and performing certain tasks from users

let lineup = ["Jeans", "T-Shirts", "Socks"];
const options = ["C", "R", "U", "D"];

const choice = prompt(
  "Hi there, welcome to shop admin panel, what do you want [C, R, U, D]? "
).toUpperCase();

while (options.indexOf(choice) < 0) {
  choice = prompt("Invalid input. Please try again: ");
}

if (choice === "R") {
  console.log("The current items are:");
  for (let i = 0; i < lineup.length; i++) {
    console.log(`${i + 1}. ${lineup[i]}`);
  }
} else if (choice === "C") {
  const newItem = prompt("Enter the name of the new item: ");
  lineup.push(newItem);
} else if (choice === "U") {
  let updateIndex = prompt("Enter the position you want to update: ");
  while (updateIndex >= lineup.length) {
    updateIndex = prompt("Invalid input. Please try again");
  }
  const updateItem = prompt("Enter the name of the new item: ");
  lineup[updateIndex - 1] = updateItem;
} else if (choice === "D") {
  const delIndex = prompt("Enter the position you want to delete");
  lineup.splice(delIndex - 1, 1);
}

// 5.	Write a script to ask users enter a sequence of numbers, the numbers are separated by commas, calculate the sum of the numbers and show it to users

const numSeq = prompt("Enter a sequence of numbers, seperated by commas: ");
const numArr = numSeq.split(",").map(x => parseInt(x));

let sum = numArr[0];
for (let i = 1; i < numArr.length; i++) {
  sum = numArr[i] + sum;
}

alert(`The sum of the numbers is ${sum}.`);

// 6.	Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

const numSeq = prompt("Enter a sequence of numbers, seperated by commas; ");
const numArr = numSeq.split(",").map(x => parseInt(x));
numArr.sort(function(a,b) {
  return a-b;
})
alert(`The smallest number of the sequence is ${numArr[0]}.`);

//7.	Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so

const testArr = [3, 4, 6, -9, 10, -88, 2];
const testNum = prompt("Enter a number: ");

let found = false;

for (let i = 0; i < testArr.length; i++) {
  if (testArr[i] === testNum) {
    found = true;
    break;
  }
}

if (found) {
  alert(`${testNum} is found in my array at index ${i}.`);
} else {
  alert(`${testNum} is not found in my array.`);
}

// Code for question 8 is stored in a file named baaa.js. Do not ask any questions.

// 9.	Given the array

//const colors = [‘red’, ‘gray’, ‘blue’, ‘purple’, ‘cyan’];

//Use JS Turtle, to draw the following shapes

const colors = ["red", "gray", "blue", "purple", "cyan"];

for (let i = 0; i < colors.length; i++) {
  color(colors[i]);
  for (let j = 1; j <= 4; j++) {
    fd(50 * i);
    rt(90);
  }
}

// 10. Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework

const nameSeq = prompt("Enter a sequence of names, seperated by commas: ");
const nameArr = nameSeq.split(",");
let namePoint = [];

for (let i = 0; i < nameArr.length; i++) {
  namePoint.push(` <${nameArr[i]}>`);
}

alert(`The resulting sequence is:${namePoint}.`);

// 11. Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence. If you need hints, they are at the end of this homework

const numSeq = prompt("Enter a sequence of numbers, seperated by commas: ");
const numArr = numSeq.split(",");
let numOdd = [];

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 1) {
    numOdd.push(` ${numArr[i]}`);
  }
}

if (numOdd.length) {
  alert("Your sequence have no odd numbers.");
} else {
  alert(`The odd numbers of your sequence are:${numOdd}.`);
}
