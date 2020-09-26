let count = 0
let clickBtn = document.getElementById("clickbtn")
clickBtn.addEventListener("click", function () {
    count ++;
    clickBtn.innerHTML = "Continue!";
    if (count === 1) {
        document.getElementById("alert").innerHTML = `This button has been clicked ${count} time.`
    } else {
        document.getElementById("alert").innerHTML = `This button has been clicked ${count} times.`
    }
});
console.dir(clickBtn);