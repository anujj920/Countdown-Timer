let countdown;
let timeLeft = 60; // Set timer to 60 seconds
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    display.innerText = `${hours}:${minutes}:${seconds}`;
}
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            isRunning = false;
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}
function resetTimer() {
    stopTimer();
    timeLeft = 60; // Reset to 60 seconds
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
