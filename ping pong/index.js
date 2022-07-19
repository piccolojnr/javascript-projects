const canvasId = document.querySelector("canvas");
const audioId = document.querySelector(".ping-pong-sound");
canvasId.width = innerWidth;
canvasId.height = innerHeight;
canvasId.style.backgroundColor = "#2c3e50";
const c = canvasId.getContext("2d");
console.log(canvasId.height)
var pause = false;
var start = false;
var finalposition = canvasId.height/2;
var keystack = "";
var score = [0,0];
var roundnum = 1;






// classes
class Partitions {
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw() {
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.fillStyle = "white"
        c.fill()
    }
}
// players
class Player {
    constructor(x, y, width, height, velocity=null){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.fillStyle = "white"
        c.fill()
    }

    updateUp() {
        this.draw()
        this.y = this.y - this.velocity
    }

    updateDown() {
        this.draw()
        this.y = this.y + this.velocity
    }

}
//  ping pong balla

class Ball {
    constructor(x, y, width, height, velocity=null){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.fillStyle = "white"
        c.fill()
    }

    update() {
        this.draw()
        this.y = this.y - this.velocity.y
        this.x = this.x - this.velocity.x
    }

}

// text

class Text{
    constructor(x,y,text,font, color){
        this.x = x
        this.y = y
        this.text = text 
        this.font = font
        this.color = color
    }

    draw(){
        c.font = this.font
        c.fillStyle = this.color
        c.fillText(this.text,this.x,this.y,)
    }
}
const score1 = new Text(canvasId.width/4,100,`${score[0]}`,"50px Courier New","white")
const score2 = new Text((canvasId.width/4)*3,100,`${score[1]}`,"50px Courier New","white")
const round = new Text(canvasId.width/2-60,50,`round ${roundnum}`,"30px Courier New", "white")
message = new Text(canvasId.width/4-75,canvasId.height/2,"Press any key to begin","50px Courier New","white")


function StartMessage(w=null){
    // score
    c.clearRect(canvasId.width/4,50,100,60)
    score1.draw()
    c.clearRect((canvasId.width/4)*3,50,100,60)
    score2.draw()

    // round
    c.clearRect((canvasId.width/2)-60,20,150,60)    
    round.draw()
    //start message
    c.clearRect(canvasId.width/2-170,canvasId.height/2-60,400,100)
    if(w=="won"){
        c.clearRect(canvasId.width/2-170,canvasId.height/2-120,400,220)
        m1 = new Text(canvasId.width/4-25,canvasId.height/2-60,"Congratulations you ","50px Courier New","green")
        m2 = new Text(canvasId.width/4-25,canvasId.height/2,"finished this stage","50px Courier New")
        m3 = new Text(canvasId.width/4-75,canvasId.height/2+60,"Press any key to begin","50px Courier New")
        m1.draw()
        m2.draw()
        m3.draw()
    }else{
        message.draw() 
    }
}





// partition
var partitionPosY = (canvasId.height/8)
var partitionNum = Math.floor((canvasId.height - (canvasId.height/8)*2)/20);
console.log(partitionNum)

const partitions = [];
for (let i=0;i<partitionNum;i++){
    partitions[i] = new Partitions(canvasId.width/2,partitionPosY,10,7);
    partitions[i].draw();
    partitionPosY += 20;
}


// pingpong ball

const ball1 = new Ball(canvasId.width/2,canvasId.height/2,10,10,{x:5, y:5})



// players

const player1 = new Player(50,canvasId.height/2,10,70,10);
player1.draw()

const player2 = new Player(canvasId.width-50,canvasId.height/2,10,70,5);
player2.draw()
// player 1 movements
addEventListener("keydown", (e)=>{
    key = e.key;
    if(key=="z"){pause=true}
    if(key=="x"){pause=false}

})

onkeydown = move = (e)=>{
    keystack = e.key
}

onkeyup = move = (e)=>{
    keystack = ""
}
 
function player1Move(){
    if(keystack=="ArrowDown" && player1.y <= canvasId.height-80){
        player1.updateDown()
    }else if(keystack=="ArrowUp" && player1.y >= 10){
        player1.updateUp()
    }
}

// player 2 movements
function machineMovement(){
    if (ball1.velocity.x<0 && ball1.x>=canvasId.width/2 && ball1.x<=canvasId.width-50){
        if(ball1.x==canvasId.width/2){
            if (ball1.velocity.y<0){
                p1 = ball1.y - player2.y-30
                p2 = (canvasId.width-50) -  ball1.x
                if(player2.y+(p1+p2)>=canvasId.height-70){
                    finalposition = canvasId.height - 70
                }else{
                    finalposition = player2.y + (p1+p2)
                }
            }else{
                p1 = (player2.y+30)-ball1.y
                p2 = (canvasId.width-50) -  ball1.x
                if(player2.y-(p1+p2)<=0){
                    finalposition = canvasId.height - 70
                }else{
                    finalposition = player2.y - (p1+p2)
                }
            }

        }else if(ball1.y<=0){
            p1 = ball1.y - player2.y-30
            p2 = (canvasId.width-50) -  ball1.x
            if(player2.y+p1+p2>=canvasId.height-70){
                finalposition = canvasId.height - 70
            }else{
                finalposition = player2.y +( p1+p2  )
            }
        }else if (ball1.y>=canvasId.height-10){
            p1 = (player2.y+30)-ball1.y
            p2 = (canvasId.width-50) -  ball1.x
            // player2.y -= p1+p2
            if(player2.y-(p1+p2)>=canvasId.height-70){
                finalposition = canvasId.height - 70
            }else{
                finalposition = player2.y - (p1+p2)
            }
        }

    }
}

function machineUpdate(fpos){
    p2pos = player2.y
    cent =  canvasId.height/2;
    if (ball1.velocity.x<0){
        if (p2pos<fpos){
            player2.updateDown()
            if(Math.abs(p2pos-fpos)<3){
                player2.y = fpos
            }
        }
        else if (p2pos>fpos){
            player2.updateUp()
            if(Math.abs(p2pos-fpos)<3){
                player2.y = fpos
            }
        }
    }else if(ball1.velocity.x>0){
        if (p2pos>cent){
            player2.updateUp()
        }else if (p2pos<cent){
            player2.updateDown()
        }
        if(Math.abs(p2pos-cent)<3){
            player2.y = cent
        }        
    }

}


// reset
function reset(r){
    score = [0,0]
    score1.text = score[0]
    score1.draw()
    score2.text = score[1]
    score2.draw()
    roundnum ++;
    round.text = `round ${roundnum}`;
    round.draw()
    ball1.x = canvasId.width/2
    ball1.y = Math.floor(Math.random()*(canvasId.height-200))+100;
    ball1.velocity.x *= -1;
    n = Math.floor(Math.random()*2)
    if (n==0){
    ball1.velocity.y *= -1;
    }else{
    ball1.velocity.y *= 1;
    }
    ball1.draw()

    if(r=="game over"){
        roundnum=0
        round.text = `round ${roundnum}`;
        StartMessage()
        start =false
    }else if(roundnum==5){
        roundnum=0
        round.text = `round ${roundnum}`;
        StartMessage("won")
        start =false
    }else{
        pause=false
    }
}

function resetGoal(){
    ball1.x = canvasId.width/2
    ball1.y = Math.floor(Math.random()*(canvasId.height-200))+100;
    ball1.velocity.x *= -1;
    n = Math.floor(Math.random()*2)
    if (n==0){
    ball1.velocity.y *= -1;
    }else{
    ball1.velocity.y *= 1;
    }
    ball1.draw()
    pause=false
}

function roundWin(color,res){
    var count = 0;
    canvasId.style.backgroundColor = color;
    c.clearRect(canvasId.width/2-100,canvasId.height/2-60,300,100)
    win = new Text(canvasId.width/2-110,canvasId.height/2,`${res}`,"50px Courier New")
    win.draw()
    var myinterval =  setInterval(() => {
    canvasId.style.backgroundColor = "#2c3e50";
    count++;
    setTimeout(() => {
        canvasId.style.backgroundColor = color;

        if (count == 3){
            setTimeout(() => {
                canvasId.style.backgroundColor = "#2c3e50"
            }, 900); 
            clearInterval(myinterval);
        } 
    }, 500);
    }, 1000); 


}

StartMessage()


addEventListener("keydown", ()=>{
    if (start == false){
    start = true
    pause = false
    animate()
    console.log("started")    
    }
});
function animate() {
    requestAnimationFrame(animate)
    if(pause==true){return}
    c.clearRect(0,0,canvasId.width,canvasId.height)
    player1.draw()
    player2.draw()
    partitions.forEach((partition)=>{partition.draw()})
    round.draw()





    if (ball1.y<=0){
        ball1.velocity.y *= -1;
    }if (ball1.y>=canvasId.height-10){
        ball1.velocity.y *= -1;
    }if (ball1.x<=0){
        ball1.velocity.x *= -1;
        score[0]++
        score1.text=score[0];
        if(score[0]==5){
            score1.draw()
            score2.draw()
            pause = true
            roundWin("red", "GAME OVER")           
            setTimeout(() => {    
                reset("game over")
            }, 5000);
        return
        }else{
            score2.draw()
            score1.draw()
            pause = true
            setTimeout(() => {
                resetGoal()
            }, 500);
            return
        } 
    }if (ball1.x>=canvasId.width-10){
        ball1.velocity.x *= -1;
        score[1]++;
        score2.text=score[1];
        if(score[1]==5){
            score2.draw()
            score1.draw()
            pause = true
            roundWin("green", "YOU WON")
            setTimeout(() => {    
                reset("won")
        }, 5000);
        return
        }else{
            score2.draw()
            score1.draw()
            pause = true
            setTimeout(() => {
                resetGoal()
            }, 500);
            return
        }        
    }if (player1.x+player1.width>=ball1.x && ball1.x>=player1.x && ball1.y<=player1.y+player1.height && ball1.y >= player1.y){
        audioId.currentTime = 0;
        audioId.play();
        ball1.velocity.x *= -1;
    }
    if (player2.x-player2.width<=ball1.x && ball1.x<=player2.x && ball1.y<=player2.y+player2.height && ball1.y >= player2.y){
        audioId.currentTime = 0;
        audioId.play();
        ball1.velocity.x *= -1;
    }

    score1.draw()
    score2.draw()
    round.draw()

    ball1.update()
    machineMovement()
    machineUpdate(finalposition)
    player1Move()
}



// animate()

