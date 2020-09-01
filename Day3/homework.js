//4.	Write a script to simulate a clothes shop, asking and performing certain tasks from users

let lineup = ["Jeans", "T-Shirts", "Socks"];
let options = ["C", "R", "U", "D"];

let choice = prompt(
  "Hi there, welcome to shop admin panel, what do you want [C, R, U, D]? "
).toUpperCase();

while (options.indexOf(choice)<0) {
  choice = prompt("Invalid input. Please try again: ")
}

if (choice === "R") {
  console.log("The current items are:");
  for (let i = 0; i < lineup.length; i++) {
    console.log(i + 1 + ". " + lineup[i]);
  };
} else if (choice === "C") {
  const newItem = prompt("Enter the name of the new item: ");
  lineup.push(newItem);
} else if (choice === "U") {
  const updateIndex = prompt("Enter the position you want to update: ");
  const updateItem = prompt("Enter the name of the new item: ");
  lineup[updateIndex - 1] = updateItem;
} else if (choice === "D") {
  const delIndex = prompt("Enter the position you want to delete");
  lineup.splice(delIndex - 1, 1);
} 
