// function (arr, callback)
// callback function gets all even numbers from the array
// function returns all even numbers


function printArray(arr) {
    console.log(...arr);
    return null;
}

function checkPrime(num) {
    if (num % 2 === 0) {
        return false;
    } 
    const limit = Math.ceil(Math.sqrt(num));
    for (let i = 3; i <= limit; i ++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getFilter(arr, callbackfunc) {
    let newArr = [];
    const length = arr.length; 
    for (let x of arr) {
        if(callbackfunc(x)) {
            newArr.push(x);
        }
    }
    return newArr;
}

function createTest(num, limit) {
    let arr = [];
    for (let i = 0; i < num; i ++) {
        arr.push(Math.floor(Math.random() * limit + 1));
    }
    return arr;
}
const testArr = createTest(100, 100000);
printArray(getFilter(testArr, checkPrime));

// Find the largest value of a function
let getMax = arr => arr.sort((a, b) => b-a)[0];
let reduceMax = arr.reduce((a,b) => Math.max(a,b));
console.log(getMax(testArr));
console.log(reduceMax(testArr));

// an array of numbers, a function(arr, callback)
// callback: return