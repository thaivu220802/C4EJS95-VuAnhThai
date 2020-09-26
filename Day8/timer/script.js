// Get elements
const timeInput = document.getElementById("timeInput")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")

startBtn.onclick = () => {
    if (!/^\d+$/.test(timeInput.value)) {
        return;
    }
    let timeLimit = parseInt(timeInput.value);
    console.log(timeLimit);
}