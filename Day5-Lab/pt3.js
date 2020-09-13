// Write a program to count the occurrences of the words

const testArr = ["to", "be", "that", "of", "elon", "to", "this", "now", "back", "cool", "hey", "love", "of", "life", "that", "rain", "summer", "color", "now", "of", "hat", "late", "sorry", "my", "team"];
const testWords = testArr.length;
const uniqueArr = testArr.filter((item, index) => testArr.indexOf(item) == index);
const uniqueWords = uniqueArr.length;
let wordCount = {};
for (let i = 0; i < uniqueWords; i ++) {
    let currWord = uniqueArr[i];
    let count = 0;
    for (let j = 0; j < testWords; j ++) {
        if (testArr[j] == currWord) {
            count ++;
        }
    }
    wordCount[currWord] = count;
}

console.log(wordCount);

// Import inventory

console.clear();
import { inventory } from './jobData.js';

// Write a program to do the reshaping from inventory

const allBrands = inventory.map(item => item.brand);
const uniqueBrands = allBrands.filter((item, index) => allBrands.indexOf(item) == index);
const uniqueBrandsNum = uniqueBrands.length;
let inventoryByBrand = {};
for (let i = 0; i < uniqueBrandsNum; i ++) {
    let currentBrand = uniqueBrands[i];
    inventoryByBrand[currentBrand.toLowerCase()] = [];
    for (let j = 0; j < inventory.length; j ++) {
        if (allBrands[j] == currentBrand) {
            inventoryByBrand[currentBrand.toLowerCase()].push(inventory[j]);
        }
    }
}
console.log(inventoryByBrand);

// From inventoryByBrand, write a program to count the generations of a certain brand in the inventory
// Add info

const searchItem = prompt("Which brand?").toLowerCase();
let found = false;
for (let x in inventoryByBrand) {
    if (x == searchItem) {
        found = true;
    }
}
if (found) {
    const inventoryItems = inventoryByBrand[searchItem].map(item => item.name);
    const inventoryPrices = inventoryByBrand[searchItem].map(item => item.price * item.quantity);
    const totalPrice = inventoryPrices.reduce((a,b) => a + b) * 1000;
    const totalPriceFormat = totalPrice.toLocaleString('vi');
    let inventoryItemFormat = "";
    for (let i = 0; i < inventoryItems.length; i ++) {
        inventoryItemFormat = `${inventoryItemFormat}
${inventoryItems[i]}`;
    }
    alert(`There are ${inventoryByBrand[searchItem].length} generations of ${searchItem.toUpperCase()} in the inventory.
${inventoryItemFormat}

With a total value of ${totalPriceFormat}VND.`);
} else {
    alert(`There are 0 generations of ${searchItem.toUpperCase()} in the inventory.`)
}