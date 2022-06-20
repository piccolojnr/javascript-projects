const keyboardKeys = [['q', 'w','e','r','t','y','u','i','o','p']
, ['a','s','d','f','g','h','j','k','l']
, ['z','x','c','v','b','n','m']]
const categories = [
    ["Premier league football teams","everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
    ["films","alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
    ["cities","manchester", "milan", "madrid", "amsterdam", "prague"]
];

const hints = [
    ["","Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
    ["","Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
    ["","Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];
var chosenWord;
var chosenWordIndex;
var chosenCateIndex;
var win = 0;

const keyboardId = document.querySelector(".btns-keys");
const outputId = document.querySelector(".display-output");
const outputCategoryId = document.getElementById("output-cate")
const livesId = document.querySelector(".lives p")
const clueId = document.querySelector(".clue p")
const letterList = [];
const hintId = document.getElementById("hint");
const resetId = document.getElementById("reset");
const stickmanId = document.getElementById("stickman");
var stx = stickmanId.getContext("2d");
asignBtns();
const btnsIds = document.getElementsByClassName("key");
var lives = 10;
stx.beginPath();
stx.strokeStyle = "white";
stx.lineWidth = 2;


playame()


function playame(){
    // win = 0;
    // clueId.textContent = "clue -";
    // livesId.textContent = "You have "+lives+" lives";
    chooseWord();
    console.log(chosenWord);
    outputSpacing(chosenWord[1], chosenWord[0]);
    globalThis.guessesIds = document.querySelectorAll(".hold li");

    hintId.addEventListener("click", ()=>{
        clueId.textContent = "Clue: - "+hints[chosenCateIndex][chosenWordIndex];

    });
    console.log(win);

    
    
}
resetId.addEventListener("click", reset)

function reset(){
    lives = 10;
    win = 0;
    clueId.textContent = "clue -";
    livesId.textContent = "You have "+lives+" lives";
    for (let i = 0; i<btnsIds.length;i++){
        btnsIds[i].style = "opacity: 1;"
    }
    
    // chooseWord();
    // console.log(chosenWord);
    stx = stickmanId.getContext("2d");
    stx.clearRect(0, 0,400,400);
    // outputSpacing(chosenWord[1], chosenWord[0]);
    playame()
}

setUpClick()

function animate(lives){
    var draeMe = lives;
    return drawArray[draeMe]();
}
function draw($pathFromx, $pathFromy, $pathTox, $pathToy){
    stx.moveTo($pathFromx, $pathFromy);
    stx.lineTo($pathTox, $pathToy);
    stx.stroke(); 
}

head = function(){
    Stickman = document.getElementById("stickman");
    stx = Stickman.getContext('2d');
    stx.beginPath();
    stx.arc(80, 38, 8, 0, Math.PI*2, true);
    stx.stroke();
  }

frame1 = function(){
    draw(20,140,170,140)
}
frame2 = function(){
    draw(30,10,30,140)
}
frame3 = function(){
    draw(20,20,90,20)
}
frame4 = function(){
    draw(80,20,80,30)
}
torso = function(){
    draw(80,44,80,80)
}
rightArm = function(){
    draw(80,54,66,70)
}
leftArm = function(){
    draw(80,54,95,70)
}
rightLeg = function(){
    draw(80,79,66,95)
}
leftLeg = function(){
    draw(80,79,95,95)
}

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 



function setUpClick(){
    for (let i = 0; i<btnsIds.length;i++){
        btnsIds[i].addEventListener("click", () =>{
            btnsIds[i].style = "opacity: .1;"
            if (chosenWord[1].includes(btnsIds[i].innerHTML)){
                applyClick(btnsIds[i].innerHTML)
                console.log(chosenWord[1]);
            }else{
                if(!letterList.includes(btnsIds[i].innerHTML) && lives > 0){
                    lives--;
                    animate(lives);
                    livesId.textContent = "You have "+lives+" lives";
                    letterList.push(btnsIds[i].innerHTML)
                }
            }
        })
    }
    
}

function applyClick(letter){
    var ids = document.querySelectorAll("."+letter);
    for (let i = 0; i<ids.length;i++){
        ids[i].innerHTML = letter;
        chosenWord[1] = chosenWord[1].replace(letter, "")
        win --;
        if(win == 0){
            livesId.innerHTML = "You Win!";
            console.log("won")
        }
    }
    
}

function asignBtns(){
    for (let i =0; i<keyboardKeys.length;i++){
        keyboardId.innerHTML += `<div>`;
        
        for(let j = 0;j<keyboardKeys[i].length;j++){ 
        var key = `<button class="key" id="${keyboardKeys[i][j]}">${keyboardKeys[i][j]}</button>`
        keyboardId.innerHTML += key
        }

        keyboardId.innerHTML += `</div>`;
    }

}
function repeat(){return repeat();}
function generateNum(lowerLimit, upperLimit){
    var random = Math.floor(Math.random()*(upperLimit+1)) + lowerLimit;
    return random;
}
function chooseWord(){
    var ranCategoryNum = generateNum(0,categories.length-1);
    var ranWordNum = generateNum(1,categories[ranCategoryNum].length-2);
    chosenWordIndex = ranWordNum;
    chosenCateIndex = ranCategoryNum;
    var category = categories[ranCategoryNum][0];
    var word = categories[ranCategoryNum][ranWordNum];

    return chosenWord = [category, word];
}



function outputSpacing(word, cate){
    outputCategoryId.textContent = `The chosen category is ${cate}`

    outputId.innerHTML = `<ul class="hold"></ul>`
    var holdId = document.querySelector(".hold");

    for (var i = 0; i < word.length; i++) {
        if(word.charAt(i)!="-"){
            win++;
            holdId.innerHTML +=`<li class="guess ${word.charAt(i)}">_</li>`;
        }else{
            holdId.innerHTML +=`<li class="guess">-</li>`;
        }
      }

    


}




