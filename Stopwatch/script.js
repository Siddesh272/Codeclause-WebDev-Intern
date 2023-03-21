const display = document.querySelector('.display');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const laps = document.querySelector('.laps');

let interval;
let lapse = 1;
let lapCounter = 1;

startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    lapse++;
    let minuteCount = Math.floor(lapse / 100 / 60);
    let secondCount = Math.floor(lapse / 100) % 60;
    let millisecondCount = lapse % 100;

    minutes.textContent = minuteCount < 10 ? `0${minuteCount}` : minuteCount;
    seconds.textContent = secondCount < 10 ? `0${secondCount}` : secondCount;
    milliseconds.textContent = millisecondCount < 10 ? `0${millisecondCount}` : millisecondCount;
  }, 10);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  lapse = 1;
  minutes.textContent = '00';
  seconds.textContent = '00';
  milliseconds.textContent = '00';
  laps.innerHTML = '';
  lapCounter = 1;
});

lapBtn.addEventListener('click', () => {
  const lapTime = display.textContent;
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
  laps.appendChild(lapItem);
  lapCounter++;
});
const timerDisplay = document.querySelector(".timer-display");
const startButton = document.querySelector(".start-timer");
const pauseButton = document.querySelector(".pause-timer");
const resetButton = document.querySelector(".reset-timer");
const setButton = document.querySelector(".set-timer");
const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");

let thours = 0;
let tminutes = 0;
let tseconds = 0;
let tinterval;

function setTimer() {
  thours = parseInt(hoursInput.value) || 0;
  tminutes = parseInt(minutesInput.value) || 0;
  tseconds = parseInt(secondsInput.value) || 0;
  updateDisplay();
}

function updateDisplay() {
  timerDisplay.innerHTML = `${thours.toString().padStart(2, "0")}:${tminutes.toString().padStart(2, "0")}:${tseconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (tinterval) {
    return;
  }
  tinterval = setInterval(() => {
    if (thours === 0 && tminutes === 0 && tseconds === 0) {
      clearInterval(tinterval);
      tinterval = null;
      alert("Time's up!");
      return;
    }
    if (tminutes === 0 && tseconds === 0) {
      thours--;
      tminutes = 59;
      tseconds = 59;
    } else if (tseconds === 0) {
      tminutes--;
      tseconds = 59;
    } else {
      tseconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
clearInterval(tinterval);
tinterval = null;
}

function resetTimer() {
clearInterval(tinterval);
tinterval = null;
thours = 0;
tminutes = 0;
tseconds = 0;
hoursInput.value = "";
minutesInput.value = "";
secondsInput.value = "";
updateDisplay();
}

setButton.addEventListener("click", setTimer);
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
