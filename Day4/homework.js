// 1. Run the following code, observe and then answer the questions

const product = {
  name: "Xiaomi Rice Cooker",
  price: 1700,
  brand: "Xiaomi",
  color: "white",
};

for (let x in product) {
  console.log(x);
}

for (let x in product) {
  console.log(`${x}: ${product[x]}`);
}

// 2. Use one line of code to destructure to obtain subject, dueDate and assignTo from this object

const task = {
  subject: "Implement login feature",
  createdBy: "Hoang Ngoc Duc",
  assignTo: "Nguyen Phuong Nam",
  dueDate: "2019-10-08T18:00:24+0000",
  expectedHours: 0.5,
};

var { subject, dueDate, assignTo } = person;

// 4. Initialize an object to represent a dictionary, with properties as keyword and values as explanation

let dictionary = {
  debug:
    "The process of finguring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for error",
  pm:
    "The short version of Project Manager, the person in charge of the final result of a project",
  ui: "User Interface, the process to define how your product looks and feels",
  ux: "User Experience, the process to define how your product looks and feels",
};

// 4.1.	Write a script to simulate the lookup of the dictionary initialized in the previous example
// 4.2. Update your script so that it can let users contribute the explanation to the dictionary

let lookupTerm = prompt("Enter a keyword:");
if (dictionary[lookupTerm]) {
  alert(`${lookupTerm}.\n${dictionary[lookupTerm]}.`);
} else {
  let lookupDef = prompt(
    `We could not find your word: ${lookupTerm}, leave your explanation:`
  );
  while (!lookupDef) {
    lookupDef = prompt("This field must not be left blank:");
  }
  dictionary[lookupTerm] = lookupDef;
  alert("Done!");
}

// 5. Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color

let products = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "white",
    category: "charger",
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "black",
    category: "phone",
  },
  {
    name: "iPhone X",
    brand: "Apple",
    price: 21490,
    color: "gray",
    category: "phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "blue",
    category: "phone",
  },
];

// 5.1 Print/log name and price of all the products out

const length = products.length;

for (let i = 0; i < length; i++) {
  console.log(`-`.repeat(20));
  console.log(`Name: ${products[i].name}`);
  console.log(`Price: ${products[i].price}`);
}

// 5.2.	Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users

for (let i = 0; i < length; i++) {
  console.log(`#${i + 1}. ${products[i].name}`);
  console.log(`    Price: ${products[i].price}`);
}

let searchReq = prompt("Enter product position:");
while (searchReq > length) {
  searchReq = prompt(
    `Invalid input. Please enter a number from 1 to ${length + 1}:`
  );
}
let searchItem = products[searchReq - 1];
console.clear();
console.log(
  `Name: ${searchItem.name}\nBrand: ${searchItem.brand}\nPrice: ${searchItem.price}\nColour: ${searchItem.color}\nCategory: ${searchItem.category}`
);

//5.3.	Write a script printing/logging out the products based on category input by users

const catSearch = prompt("Enter your category?");
for (let i = 0; i < length; i++) {
  if (products[i].category == catSearch) {
    console.log(`-`.repeat(20));
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
  }
}

// 5.4. Add providers to each product

products[0].provider = ["phukienzero", "dientuccc"];
products[1].provider = ["tgdd", "ddghn", "vhstore"];
products[2].provider = ["tgdd"];
products[3].provider = ["tgdd"];

// Log out all of the products

for (let i = 0; i < length; i++) {
  console.log(`#${i + 1}. ${products[i].name}`);
  console.log(`    Price: ${products[i].price}`);
  console.log(`    Providers: ${products[i].provider}`);
}

// 5.5. Search product based on wanted provider

console.clear();
const provWant = prompt("Enter provider").toLowerCase();

for (let i = 0; i < length; i++) {
  if (products[i].provider.indexOf(provWant) > 0) {
    let searchItem = products[i];
    console.log(`-`.repeat(20));
    console.log(
      `Name: ${searchItem.name}\nBrand: ${searchItem.brand}\nPrice: ${searchItem.price}\nColour: ${searchItem.color}\nCategory: ${searchItem.category}\nProviders: ${searchItem.provider}`
    );
  }
}

// 6. Write a script to store and process the learning tasks to become a front-end developer

let tasks = [
  { job: "HTML", complete: false },
  { job: "CSS", complete: false },
  { job: "Basics of JavaScript", complete: false },
  { job: "Node Package Manager (npm)", complete: false },
  { job: "Git", complete: false },
];

console.clear();
console.log(
  "Hi there, these are the things you need to learn to become a front-end developer:"
);
let length = tasks.length;
for (let i = 0; i < length; i++) {
  console.log(`${i + 1}. ${tasks[i].job}`);
  console.log(`    Complete: ${tasks[i].complete}`);
}

let comm = prompt("Enter your command (New, Delete, Update, Complete)")
  .toLowerCase;
const availComm = ["new", "delete", "update", "complete"];
while (availComm.indexOf(comm) < 0) {
  comm = prompt("Invalid input. Re-enter your command:");
}

switch (availComm.indexOf(comm)) {
  case 0:
    let newTask = {};
    const newJob = prompt("Enter new task:");
    newTask.job = newJob;
    newTask.complete = false;
    tasks.push(newTask);
    break;
  case 1:
    let num = prompt("Enter position:");
    while (num === 0 || num > length) {
      num = prompt("Invalid input. Enter position:");
    }
    tasks.splice(num - 1, 1);
    break;
  case 2:
    let num = prompt("Enter position:");
    while (num === 0 || num > length) {
      num = prompt("Invalid input. Enter position:");
    }
    let newJob = prompt("Enter new title");
    tasks[num - 1].job = newJob;
    break;
  case 3:
    let num = prompt("Enter position:");
    while (num === 0 || num > length) {
      num = prompt("Invalid input. Enter position:");
    }
    tasks[num - 1].complete = true;
    break;
}

console.clear();
console.log(
  "Hi there, these are the things you need to learn to become a front-end developer:"
);
let length = tasks.length;
for (let i = 0; i < length; i++) {
  console.log(`${i + 1}. ${tasks[i].job}`);
  console.log(`    Complete: ${tasks[i].complete}`);
}

// 7. Move the turtle to the provided position

const pos = {
  x: 200,
  y: 50,
};

home();
clear();
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

// 8. Draw a square at position (x, y) with size width

const square = {
  x: 100,
  y: 50,
  width: 20,
};

home();
clear();
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}

// 9. Draw a rectangle at position (x, y) with size width and height

const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};

home();
clear();
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.height);
  rt(90);
  fd(rect.width);
  rt(90);
}

// Given data structure, go through and execute all command

const cmds = [
  {
    shape: "rect",
    x: 8,
    y: 70,
    width: 12,
    height: 40,
  },
  {
    shape: "square",
    x: 20,
    y: 40,
    width: 50,
  },
];

for (let i = 0; i < cmds.length; i++) {
  switch (cmds[i].shape) {
    case "rect":
      home();
      clear();
      penup();
      rt(90);
      fd(cmds[i].x);
      lt(90);
      fd(cmds[i].y);
      pendown();
      for (let j = 0; j < 2; j++) {
        fd(cmds[i].height);
        rt(90);
        fd(cmds[i].width);
        rt(90);
      }
      break;
    case "square":
      home();
      clear();
      penup();
      rt(90);
      fd(cmds[i].x);
      lt(90);
      fd(cmds[i].y);
      pendown();
      for (let j = 0; j < 4; j++) {
        fd(cmds[i].width);
        rt(90);
      }
      break;
  }
}
