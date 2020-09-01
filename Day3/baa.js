//8.1. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

let flockSize = [13, 110, 159, 295, 323, 609, 794, 813, 852, 948]
console.log(`Hello, my name is Anh Thai, and here is the size of my flock: ${flockSize}.`);

// 8.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:

let flockMax = flockSize[0];
for (let i = 1; i < flockSize.length; i++) {
    if(flockSize[i] > flockMax){
        flockMax = flockSize[i];
    }
}
console.log(`The size of my biggest sheep is currently ${flockMax}; it's time to shave it!`);

// 8.3.	When your biggest sheer, its size will return to the default size, which is 8.

for (let i = 0; i < flockSize.length; i ++) {
    if(flockSize[i] ===  flockMax) {
        flockSize[i] = 8;
    }
}
console.log(`Here is my flock after shaving: ${flockSize}.`);

// 8.4.	In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out

for (let i = 0; i < flockSize.length; i ++) {
    flockSize[i] = flockSize[i] + 50;
}
console.log(`After 1 month, my flock has grown to ${flockSize}.`);