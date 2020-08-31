/*Write a program that requests user input, and then 
1. Calculate the sum from 1 to that number
2. print out the odd and the even numbers*/

let numLimit = prompt("Please enter a positive integer: ");

let numSum = 0;
for (let i = 1; i <= numLimit; i++) {
  numSum = numSum + i;
}

let numOdd = "The odd numbers from 1 to " + numLimit + " are: ";
let numEven = "The even numbers from 1 to " + numLimit + " are: ";
for (let i = 1; i <= numLimit; i++) {
  if (i % 2 == 1) {
    numOdd = numOdd + i + " ";
  } else {
    numEven = numEven + i + " ";
  }
}

console.log(
  "The sum of all natural numbers from 1 to " + numLimit + " is " + numSum
);
console.log(numOdd);
console.log(numEven);

// /*Write a program to validate a Name and a Password from user input, checking if
// the Name is blank or not and if the Password violates any
// of the following criteria: (1) at least 6 characters (2) fewer than 20 characters.
// If the Name and the Password not violate any of those criteria, provide the user with an alert that their
// registration was successful. */

let userName = prompt("Enter your name: ");
while (!userName) {
  userName = prompt("Please try again: ");
}

let userPass = prompt(
  "Enter a password (6-20 characters), at least 1 uppercase/lowercase/number:"
);

while (
  userPass.length < 6 ||
  userPass.length > 20 ||
  !userPass.match(/[A-Z]/) ||
  !userPass.match(/[a-z]/) ||
  !userPass.match(/[0-9]/)
) {
  userPass = prompt("Invalid password. Please try again: ");
}

alert("Registration successful. Welcome to the club, " + userName + ".");
