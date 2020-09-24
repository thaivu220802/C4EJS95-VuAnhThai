// Write a function, using alert to show your name and one thing you wish to do this year
function myWish(name, wish) {
    alert(`My name is ${name}, and this year, my wish is: ${wish}.`);
}

// 9+10.	Write a function, using alert to show user’s name and one wish of the user this year
function yourWish(name, wish) {
    if (!wish) {
        alert(`Your name is ${name}, and you wish for nothing this year.`)
    } else {
        alert(`Your name is ${name}, and this year, your wish is: ${wish}.`)
    }
}

//1: 1d 2a 3c 4b

// 4. Use getElementsByTagName function to get ALL of the <li> tag. Print/log out the first element (which is <li>Articles</li>) and then use for loop to print ALL of the DOM you get from the function.
const elements = document.getElementsByTagName("LI");
console.log(elements[0]);
for (let i = 0; i < elements.length; i ++) {
    console.log(elements[i].innerHTML);
}

// 5
const singers = document.getElementsByTagName("div");
console.log(singers[2]);
for (let i = 1; i < singers.length; i ++) {
    console.log(singers[i].innerHTML);
}

// 7
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const input = document.getElementById("input");
const buttons = [button1, button2];

for (let button of buttons) {
    button.addEventListener("click", (e) => console.log(e.target));
}

input.addEventListener("keydown", (e) => console.log(e.key))