

// IDS
var mode = "hard";
var squareNum = 6;
var chosenColor = "#2C8E99";
const squareIds = document.querySelectorAll(".square"),
resetId = document.querySelector(".reset"),
bannerId = document.querySelector("h1"),
rgbId = document.getElementById("rgb"),
modeIds = document.querySelectorAll(".mode"),
messageId = document.querySelector(".message"),
containerId = document.querySelector(".container");
var mainColor;
var mainSquare;

playGame()

function playGame(){
    // random numbers
    asignColor();
    addClickSquare()
    // setUpModes()
    resetColor()
    

}

resetId.addEventListener("click", function(){resetColor()});

// functions
// assign color
function asignColor() {
    mainColor = makeColor();
    rgbId.innerHTML = mainColor;
    mainSquare = generateRandom(squareNum-1);
    for (let i = 0; i < squareNum; i++){
        if (i==mainSquare) {
            squareIds[i].style.backgroundColor = mainColor;
            continue;
        }
        callColor(i);
    }
    if (squareNum == 3){
        for (let i = 3; i < 6; i++){
            squareIds[i].style.backgroundColor = "#232323";
        }
    }
};
// call color
function callColor(e) {
        var color = makeColor();
        if(color == mainColor[0]){
            repeat();
        }
        return squareIds[e].style.backgroundColor = color;
};
// add click 
function addClickSquare() {
    for (let i = 0; i<squareNum; i++){
        squareIds[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == mainColor){
                messageId.textContent = "correct";
                resetId.textContent = "play again";
                showSquare(mainColor);
            }else{
                messageId.textContent = "try again";
                squareIds[i].style.backgroundColor = "#232323";
            }
        });
    }
};

// modes

// square modes 
modeIds[0].addEventListener("click", function(){
    modeIds[0].classList.add("selected");
    modeIds[0].style = `
    color:  white;
    background-color: #2C8E99;
    `;
    modeIds[1].classList.remove("selected");
    modeIds[1].style = `
    color:  #2C8E99;
    background-color: white;
    `;
    if (mode != "easy"){
        mode = "easy";
        squareNum = 3;
        // asignColor()
        resetColor()
    }
})

modeIds[1].addEventListener("click", function(){
    modeIds[1].classList.add('selected');
    modeIds[1].style = `
    color:  white;
    background-color: #2C8E99;
    `;
    modeIds[0].classList.remove("selected");
    modeIds[0].style = `
    color:  #2C8E99;
    background-color: white;
    `;
    if (mode != "hard"){
        mode = "hard";
        squareNum = 6;
        // asignColor()
        resetColor()
          }
})


// reset color
function resetColor() {
    bannerId.style.backgroundColor =  '#2C8E99';;
    messageId.textContent = "";
    resetId.textContent =  "new colors";
    if (mode == "hard"){
        modeIds[1].style.backgroundColor = '#2C8E99';
    }else if(mode == "easy"){
        modeIds[0].style.backgroundColor = '#2C8E99';
    }
    asignColor();

};
// show square
function showSquare(color) {
    for (let i = 0; i<squareNum; i++){
        squareIds[i].style.backgroundColor = color;
        bannerId.style.backgroundColor = color;
        if (mode == "hard"){
            modeIds[1].style.backgroundColor = color;
        }else if(mode == "easy"){
            modeIds[0].style.backgroundColor = color;
        }

}
}



function generateRandom (maxLimit){
    return Math.floor(Math.random()*(maxLimit+1));
};
function makeColor(){
    var r = generateRandom(255);
    var g = generateRandom(255);
    var b = generateRandom(255);
    return "rgb("+r+", "+g+", "+b+")";
}

function repeat(){repeat();}

