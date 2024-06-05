let btns = document.querySelectorAll(".btns button");
let start = btns[0],
  reset = btns[1];
let millisecond = 0,
  second = 0,
  minute = 0,
  hour = 0;
let millisecondId = document.getElementById("millisecond");
let secondId = document.getElementById("second");

let hourId = document.getElementById("hour");
let minuteId = document.getElementById("minute");

function Start() {
  start.innerHTML = "Stop";
  start.setAttribute("onclick", "Stop()");
  myInterval = setInterval(setTime, 10);
}

function setTime() {
  millisecond++;
  if (millisecond == 100) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  htmlUpdater();
}

function htmlUpdater() {
  if (millisecond < 10) {
    millisecondId.innerHTML = "0" + millisecond;
  } else {
    millisecondId.innerHTML = millisecond;
  }

  if (second < 10) {
    secondId.innerHTML = "0" + second;
  } else {
    secondId.innerHTML = second;
  }

  if (minute < 10) {
    minuteId.innerHTML = "0" + minute;
  } else {
    minuteId.innerHTML = minute;
  }

  if (hour < 10) {
    hourId.innerHTML = "0" + hour;
  } else {
    hourId.innerHTML = hour;
  }
}

function Stop() {
  start.innerHTML = "Start";
  start.setAttribute("onclick", "Start()");
  clearInterval(myInterval);
}

function Reset() {
  (second = 0), (minute = 0), (hour = 0), (millisecond = 0);
  millisecondId.innerHTML = "00";
  secondId.innerHTML = "00";
  minuteId.innerHTML = "00";
  hourId.innerHTML = "00";

  start.innerHTML = "Start";
  start.setAttribute("onclick", "Start()");
  clearInterval(myInterval);
}
