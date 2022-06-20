let btns = document.querySelectorAll(".btns button")
let start = btns[0], reset = btns[1];
let second = 0, minute = 0, hour = 0;
let secondId = document.getElementById('second');
let hourId = document.getElementById('hour');
let minuteId = document.getElementById('minute');

start.setAttribute("onmouseover", 'hoverIn(0)');
start.setAttribute("onmouseout", 'hoverOut(0)');
reset.setAttribute("onmouseover", 'hoverIn(1)');
reset.setAttribute("onmouseout", 'hoverOut(1)');


function hoverIn(index){
        btns[index].style = "background-color: rgb(122, 47, 51) "
        btns[index].style = "border: rgb(122, 47, 51) outset"
}
function hoverOut(index){
    btns[index].style = "background-color: rgb(100, 44, 47)"
}


function Start(){
    start.innerHTML = "Stop";
    start.setAttribute("onclick", "Stop()")
    globalThis.myInterval = setInterval(setTime, 100);


    function setTime(){    
        //html updater
        if (second < 10){
            secondId.innerHTML = "0"+second;
        }else{
            secondId.innerHTML = second;
        }
        
        // second updater
        if (second < 59){
            second ++;
        }else{
                second = 0;
        }

        // MINUTE
        if (second == 0){
            // minute updater
            if (minute < 59){
                minute ++;
            }else{
                minute = 0;
            }
            //html updater
            if (minute < 10){
                minuteId.innerHTML = "0"+minute;
            }else{
                minuteId.innerHTML = minute;
            }     
       }

       //HOUR
       if (minute == 0 && second == 0){
            // hour updater
            hour ++;
            
            //html updater
            if (hour < 10){
                hourId.innerHTML = "0"+hour;
            }else{
                hourId.innerHTML = hour;
            }     
         }

     
        
    }

}


function Stop(){
    start.innerHTML = "Start";
    start.setAttribute("onclick", "Start()")
    clearInterval(myInterval);
}

function Reset(){
    second = 0, minute = 0, hour = 0;
    secondId.innerHTML = "00";
    minuteId.innerHTML = "00";
    hourId.innerHTML = "00";
    start.innerHTML = "Start";
    start.setAttribute("onclick", "Start()")
    clearInterval(myInterval);
}

