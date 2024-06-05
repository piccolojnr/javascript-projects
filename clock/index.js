const switchBtnId = document.getElementById("switch-btn");
var setSwitch = "24";

function showTime() {
  const ids = document.querySelectorAll(".time div");
  const sessionId = document.getElementById("session");
  let hourId = ids[0],
    minuteId = ids[2],
    secondId = ids[4];
  var session = "AM";
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  // change to 12hour
  if (setSwitch == "12") {
    if (hour > 12) {
      hour -= 12;
      session = "PM";
    } else if (hour == 0) {
      hour = 12;
      session = "AM";
    }
    sessionId.innerHTML = session;
  } else {
    sessionId.innerHTML = "";
  }

  var h, m, s;
  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = second < 10 ? "0" + second : second;

  hourId.innerHTML = h;
  minuteId.innerHTML = m;
  secondId.innerHTML = s;
  setTimeout(showTime, 1000);
}
showTime();

function Switch() {
  if (setSwitch == "24") {
    setSwitch = "12";
    document.getElementById("display-type").innerHTML = "12 HOUR clock";
  } else if (setSwitch == "12") {
    setSwitch = "24";
    document.getElementById("display-type").innerHTML = "24 HOUR clock";
  }
  switchBtnId.setAttribute(onclick, "Switch()");
}
