// 1. Run the following code, observe and then answer the questions

const product = {
    name: 'Xiaomi Rice Cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
}

for (let x in product) {
    console.log(x);
}

for (let x in product) {
    console.log(`${x}: ${product[x]}`)
}

// 2. Use one line of code to destructure to obtain subject, dueDate and assignTo from this object

const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
}

var {subject, dueDate, assignTo} = person;

// 4. Initialize an object to represent a dictionary, with properties as keyword and values as explanation

let dictionary = {
    debug: 'The process of finguring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for error',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    ui: 'User Interface, the process to define how your product looks and feels',
    ux: 'User Experience, the process to define how your product looks and feels'
}

// 4.1.	Write a script to simulate the lookup of the dictionary initialized in the previous example
// 4.2. Update your script so that it can let users contribute the explanation to the dictionary

let lookupTerm = prompt('Enter a keyword:');
if(dictionary[lookupTerm]) {
    alert(`${lookupTerm}.\n${dictionary[lookupTerm]}.`)
} else {
   let lookupDef = prompt(`We could not find your word: ${lookupTerm}, leave your explanation:`);
   while(!lookupDef){
       lookupDef = prompt('This field must not be left blank:');
   } 
   dictionary[lookupTerm] = lookupDef;
   alert('Done!');
}