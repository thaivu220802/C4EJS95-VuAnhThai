/* Question 3
Write a program to print out
a. 7 numbers, starting from 0, no user input
*/

for (let i = 0; i <= 7; i++) {
  console.log(i);
}

/*
  b. n numbers, starting from 0, n entered by user
  */

let n = prompt("Enter n: ");
for (let i = 0; i <= n; i++) {
  console.log(i);
}

/*
  c. A sequence of numbers, starting from 3, ending before n, n entered by user
  */

let n = prompt("Enter n: ");
for (let i = 3; i <= n; i++) {
  console.log(i);
}

/*
  d. A sequence of numbers, starting from c, ending before n, c and n entered by user
  */

let n = prompt("Enter n: ");
let c = prompt("Enter c: ");
for (let i = c; i <= n; i++) {
  console.log(i);
}

/*
  e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
  */

let n = prompt("Enter n: ");
let c = prompt("Enter c: ");
for (let i = c; i <= n; i = i + 3) {
  console.log(i);
}

/*
  f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
  */

let n = prompt("Enter n: ");
let c = prompt("Enter c: ");
let s = prompt("Enter s: ");
for (let i = c; i <= n; i = i + s) {
  console.log(i);
}

/* Question 4
  Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n entered by user
  */

let n = prompt("Enter n: ");
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * n;
}
alert("The factorial of " + n + " is " + fact + ".");

/* Question 5
  Write a program to ask users their age, and then decide if they are old enough to view a 14+ content */

let userAge = prompt("How old are you?");
if (userAge < 14) {
  alert("Sorry – this content is age-restricted.");
} else {
  alert("You may proceed. Have a great time!");
}

/* Question 6	
Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
*/

let x = prompt("Enter x:");
if (x <= 4) {
  alert("Lower half of 0-9 range.");
} else {
  alert("Upper half of 0-9 range.");
}

/* Question 7
Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of 0-n range
*/

let x = prompt("Enter x: ");
let n = prompt("Enter n: ");
if (x <= Math.floor(n / 2)) {
  alert("Lower half of 0-" + n + " range.");
} else {
  alert("Upper half of 0-" + n + " range.");
}

/* Question 8
Write a script to check if a number is even or odd 
*/

let num = prompt("Enter a number: ");
if (num % 2 == 0) {
  alert(num + " is an even number.");
} else {
  alert(num + " is an odd number.");
}

/* Question 9
Write a program to print out
a. 6 L's and H's, 3 L's and 3 H's */

for (let i = 1; i <= 3; i++) {
  console.log("L");
}

for (let j = 1; j <= 3; j++) {
  console.log("H");
}

/* b.	n L’s and H’s in total, n entered by user */

let n = prompt("Enter the total number of L's and H's:");

for (let i = 1; i <= Math.floor(n / 2) + 1; i++) {
  console.log("L");
}

for (let j = 1; j <= Math.floor(n / 2); j++) {
  console.log("H");
}

/* c.	8 1’s and 0’s in total, consecutively */

for (let i = 1; i <= 8; i++) {
  switch (i % 2) {
    case 0:
      console.log(1);
      break;
    case 1:
      console.log(0);
      break;
  }
}

/* d. n 1’s and 0’s in total, consecutively, n entered by user */

let n = prompt("Enter n: ");
for (let i = 1; i <= n; i++) {
  switch (i % 2) {
    case 0:
      console.log(1);
      break;
    case 1:
      console.log(0);
      break;
  }
}

/* Question 10
Write a script to calculate a person's BMI, and use that information to sort people into categories.
*/

let weight = prompt("Enter your weight in kg: ");
let height = prompt("Enter your height in cm: ") / 100;

let bmi = weight / (height * height);
let verdict;

if (bmi < 16) {
  verdict = "severly underweight";
} else if (bmi < 18.5) {
  verdict = "underweight";
} else if (bmi < 25) {
  verdict = "normal";
} else if (bmi < 30) {
  verdict = "overweight";
} else {
  verdict = "obese";
}

alert(
  "Your BMI is " + Math.round(bmi * 100) / 100 + " and you are " + verdict + "."
);

/* Question 10.
Use JS Turtle to draw the following shapes
a. A square
*/

for (let i = 1; i <= 4; i++) {
  fd(50);
  rt(90);
}

/*
b. A triangle
*/

for (let i = 1; i <= 3; i++) {
  fd(50);
  rt(120);
}

/* 
c. A pentagon
*/

for (let i = 1; i <= 5; i++) {
  fd(50);
  rt(72);
}

/*
d. A hexagon
*/

for (let i = 1; i <= 6; i++) {
  fd(50);
  rt(60);
}

/* Question 11.
11.	Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
*/

const n = prompt("Enter the number of edges:");

for (let i = 1; i <= n; i++) {
  fd(50);
  rt(180 - (180 * (n - 2)) / n);
}

/* Question 12.
12. Use JS Turtle to draw n polygons, n entered by users
*/

const LIMIT = prompt("How many polygons?");
const LENGTH = 50;

for (let i = 3; i < parseInt(LIMIT) + 3; i++) {
  for (let j = 0; j < i; j++) {
    fd(LENGTH);
    rt(360/i);
  }
}
