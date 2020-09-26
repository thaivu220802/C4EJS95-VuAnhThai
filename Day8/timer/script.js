// Get elements
const timeInput = document.getElementById("timeInput")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const timeDisplay = document.getElementById("timer")
let countdownTimer;

startBtn.onclick = () => {
    if (!/^\d+$/.test(timeInput.value)) {
        return;
    }
    let count = parseInt(timeInput.value);
    timeDisplay.innerHTML = count;
    countdownTimer = setInterval(timer, 1000)
    function timer() {
        count --;
        if (count < 0) {
            clearInterval(countdownTimer);
            alert("Time's up!");
            return;
        }
        timeDisplay.innerHTML = count;
    }
}

stopBtn.onclick = () => {
    clearInterval(countdownTimer);
    timeDisplay.innerHTML = 0;
}
