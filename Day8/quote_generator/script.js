import { QUOTES } from "./quotes.js"

const limit = QUOTES.length

document.getElementById("reloader").addEventListener("click", function () {
    let i = Math.floor(Math.random() * limit);
    document.getElementById("quoteText").innerHTML = QUOTES[i].quoteText;
    document.getElementById("quoteAuthor").innerHTML = QUOTES[i].quoteAuthor;
});