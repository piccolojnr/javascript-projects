{
    const generateRandom = (maxLimit, tensLimt) => {
        while (true){
            let random = Math.floor(Math.random()*tensLimt);
            if (random <= maxLimit){
                return random;
            }
        }
    }
// ids
    const squareIds = document.querySelectorAll(".container div");
    const resetId = document.querySelector(".reset");
    const rgbId = document.getElementById("rgb");
    const modeIds = document.querySelectorAll(".mode");
    const messageId = document.querySelector(".message");
    const containerId = document.querySelector(".container");

    
    function playGame(){

   
    var randomRbgNum1 = generateRandom(255, 1000);
    var randomRbgNum2 = generateRandom(255, 1000);
    var randomRbgNum3 = generateRandom(255, 1000);
    var randomSquare = generateRandom(5, 10);
    const repeat = () => {repeat()};
    const callColor = e => {
        // console.log(e)
        let color = `rgb(${generateRandom(255,1000)}, ${generateRandom(255,1000)}, ${generateRandom(255,1000)})`;
        if(color == `rgb(${randomRbgNum1},${randomRbgNum2},${randomRbgNum3})`){
            repeat();
        }
        squareIds[e].style.backgroundColor = color;

    };
    const addClickSquare = () => {
        for (let i = 0; i<6; i++){
            squareIds[i].addEventListener("click", () => {hideSquare(i)});
        }
    }
    const removeClickSquare = () => {
        for (let i = 0; i<6; i++){
            squareIds[i].removeAttribute("click");
        }
    }

    // assign colors to squares
    const asignColor = () => {
        for (let i = 0; i < 6; i++){
            if (i==randomSquare) {
            squareIds[i].style.backgroundColor = `rgb(${randomRbgNum1},${randomRbgNum2},${randomRbgNum3})`;
            // console.log(i+" is dis one")
            continue;
            }
            
            callColor(i);
        }

    }
    // reset color
    const resetColor = () => {
        for (let i = 0; i<6; i++){
            squareIds[i].style.backgroundColor = "purple";
        }
    }

    // show squares
    const showSquare = () => {
        for (let i = 0; i<6; i++){
            squareIds[i].style.visibility = "visible";
        }
    }
    // hide square
    const hideSquare = e => {
        squareIds[e].style.visibility = "hidden";
        if (e != randomSquare){
            messageId.innerHTML = "try again"
        }else{
            messageId.innerHTML = "correct"
        }
        console.log(e)
        if (e==randomSquare){
            console.log("winner "+e)
            showSquare();
            resetColor();
            resetId.innerHTML = "play again";
            removeClickSquare();
            return
        }
    }

   
    showSquare()


    // clicking squares
    addClickSquare()
    
    // for (let i = 0; i < 6; i++){
    //     if (squareIds[i].style.visibility == "hidden"){
    //         console.log("working"+i);
    //     }
    // }

    rgbId.innerHTML = `RGB(${randomRbgNum1}, ${randomRbgNum2}, ${randomRbgNum3})`;
    asignColor()
    // resetId.addEventListener("click", Reset);

}
  
function easyMode(){
    for (let i =0; i<3;i++){
        squareIds[i].remove();
    }
    modeIds[0].addEventListener("click", easyMode);

}


function hardMode(){
    for (let i =0; i<3;i++){
        containerId.innerHTML += `<div class="square"></div>`;
    }
}



playGame();
resetId.addEventListener("click", playGame);
modeIds[0].addEventListener("click", easyMode);
modeIds[1].addEventListener("click", hardMode);





}