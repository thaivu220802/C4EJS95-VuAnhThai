// Get elements
const timeInput = document.getElementById("timeInput")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const timeDisplay = document.getElementById("timer")
const timeOutBeep = document.getElementById("timeOut")
let countdownTimer;

startBtn.onclick = () => {
    if (!/^\d+$/.test(timeInput.value)) {
        return;
    }
    let count = parseInt(timeInput.value);
    // timeDisplay.innerHTML = count;
    countdownTimer = setInterval(timer, 1000)
    function timer() {
        if (count < 0) {
            clearInterval(countdownTimer);
            timeOutBeep.play();
            alert("Time's up!");
            return;
        }
        let countMin;
        let countSec;
        if (count < 60) {
            countMin = "";
            countSec= count;
        } else {
            countMin = Math.floor(count / 60);
            countSec = count % 60;
        }
        timeDisplay.innerHTML = `${countMin}:${('0' + countSec).slice(-2)}`;
        count --;
    }
}

stopBtn.onclick = () => {
    clearInterval(countdownTimer);
    timeDisplay.innerHTML = 0;
}
