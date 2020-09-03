//8.1. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

let flockSize = [13, 110, 159, 295, 323, 609, 794, 813, 852, 948];
console.log(
  `Hello, my name is Anh Thai, and here is the size of my flock:`
);
console.log(...flockSize);

// 8.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:

let flockMax = flockSize[0];
for (let i = 1; i < flockSize.length; i++) {
  if (flockSize[i] > flockMax) {
    flockMax = flockSize[i];
  }
}
console.log(
  `The size of my biggest sheep is currently ${flockMax}; it's time to shave it!`
);

// 8.3.	When your biggest sheer, its size will return to the default size, which is 8.

for (let i = 0; i < flockSize.length; i++) {
  if (flockSize[i] === flockMax) {
    flockSize[i] = 8;
  }
}
console.log(`Here is my flock after shaving:`);
console.log(...flockSize);

// 8.4.	In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
console.log("MONTH 1");
for (let i = 0; i < flockSize.length; i++) {
  flockSize[i] = flockSize[i] + 50;
}
console.log(`My flock has grown to:`);
console.log(...flockSize);

// 8.5. Let's do this for 4 months
for (let month = 2; month <= 4; month++) {
  let flockMax = flockSize[0];
  for (let i = 1; i < flockSize.length; i++) {
    if (flockSize[i] > flockMax) {
      flockMax = flockSize[i];
    }
  }
  console.log(
    `The size of my biggest sheep is currently ${flockMax}; it's time to shave it!`
  );
  for (let i = 0; i < flockSize.length; i++) {
    if (flockSize[i] === flockMax) {
      flockSize[i] = 8;
    }
  }
  console.log(`Here is my flock after shaving:`);
  console.log(...flockSize);
  console.log(`MONTH ${month}`);
  for (let i = 0; i < flockSize.length; i++) {
    flockSize[i] = flockSize[i] + 50;
  }
  console.log(`My flock has grown to:`);
  console.log(...flockSize);
}

// 8.6. Calculate total size and total earnings

let flockTotal = 0;
for (let i = 0; i < flockSize.length; i++) {
  flockTotal = flockTotal + flockSize[i];
}

console.log(`My flock's total size is ${flockTotal}.`);
console.log(
  `After selling this flock, I will get ${flockTotal} * 2 USD = ${
    flockTotal * 2
  } USD.`
);