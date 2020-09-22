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

