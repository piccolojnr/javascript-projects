var display = "";

function Click(n){
    display += n;
    document.getElementById("display").innerHTML = display;
}



function equals(){
    display = Calculations(display);
    document.getElementById("display").innerHTML = display;
}

function Back(){
    display = display.slice(0, display.length-1);
    document.getElementById("display").innerHTML = display;
}

function Clear(){
    display = "";
    document.getElementById("display").innerHTML = display;
}

function Calculations(numbers){
    numbers = numbers.split("")
    var operators = [];
    for (let i = 0; i<numbers.length;i++){
        if (numbers[i] == "+" || numbers[i] == "-" || numbers[i] == "x" || numbers[i] == "÷"){
            operators.push(numbers[i])
        }
    }    

    numbers = numbers.join("").split('+').join(',').split("-").join(',').split("x").join(',').split('÷').join(',').split(',');

    var res = parseFloat(numbers[0]);

    for (let i = 0; i<operators.length;i++){
        n = parseFloat(numbers[i+1])
        if (operators[i]=="+"){
            res += n
        }else if (operators[i]=="-"){
            res -= n
        }else if (operators[i]=="x"){
            res *= n
        }else if (operators[i]=="÷"){
            res /= n
        }
    }
   return res
}
