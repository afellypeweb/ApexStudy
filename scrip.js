let seconds = 0;
let timerInterval;

const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    display.innerText = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

startBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => { seconds++; updateDisplay(); }, 1000);
});

pauseBtn.addEventListener('click', () => clearInterval(timerInterval));
