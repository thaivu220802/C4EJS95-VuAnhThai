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
  
  let userAge = prompt('How old are you?');
  if (userAge < 14){
      alert('Sorry – this content is age-restricted.');
  } else {
      alert('You may proceed. Have a great time!');
  }