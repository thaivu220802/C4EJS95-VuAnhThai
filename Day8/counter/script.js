let count = 0;
const COUNTER = document.getElementById("counter")
const ADD = document.getElementById("add")
const SUB = document.getElementById("sub")

// Increase count when + button is clicked

ADD.addEventListener("click", function() {
    count ++;
    COUNTER.innerHTML = ` ${count} `;
})

// Decrease count when - button is clicked

SUB.addEventListener("click", function() {
    count --;
    COUNTER.innerHTML = ` ${count} `
})