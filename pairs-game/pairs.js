const cardsId = document.querySelectorAll(".card");
const backId = document.querySelectorAll(".card .back");
minuteId = document.getElementById('minute');
secondId = document.getElementById('second');
var match = "none";
var images = [
    'card_0', 
    'card_1', 
    'card_2', 
    'card_3', 
    'card_4'
  ];

function shuffle(arr){
    let n = arr.length, i,t;
    while (n){
        i = Math.floor(Math.random()*n--);
        
        t = arr[n];
        arr[n] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function assignImages(){
    let shuffled_images = shuffle(images.concat(images));
    for (let i = 0;i<backId.length;i++){
        backId[i].style.backgroundImage = `url('images/${shuffled_images[i]}.jpg')`;
        backId[i].setAttribute('id', `${shuffled_images[i]}`);
    }
}
assignImages()
cardsId.forEach((card)=>{
    card.addEventListener("click", ()=>{
        if (match == "none"){
            card.classList.add("flip");
            match = card.querySelector('.back').getAttribute('id');
        }else if (card.querySelector('.back').getAttribute('id') == match){
            card.classList.add("flip");
            match = 'none';
        }else{
            card.classList.add("flip");
            setTimeout(() => {
                card.classList.remove("flip");
            }, 500);
        }
        console.log(match)
    });
});

function timer(){
    second = 0;
    minute = 0;
    timing_game = setInterval(() => {
        if (second==60){
            minute++;
            second = 0
        }
        minuteId.innerHtml
        second++;
    }, 1000);
}