{const audioIds = document.querySelectorAll("body audio");
const crashRideId = document.getElementById("crash-ride");
const hihatTopId = document.getElementById("hihat-top");

const playAudio = e => {
    
    var Keycode = e.keyCode;
    var audioElement = 
    document.querySelector(`audio[data-key="${Keycode}"]`);
    globalThis.test = document.querySelector(`div[data-key="${Keycode}"]`);

    if (!audioElement) return;
    audioElement.currentTime = 0;
    audioElement.play();
    console.log(Keycode);
    keyTransform()
    setTimeout(keyRemoveTransform,100)
    if (Keycode == 69){
        crashTransform();
        setTimeout(crashRemoveTransform, 100);
    }
    if (Keycode == 82){
        rideTransform();
        setTimeout(rideRemoveTransform, 100);
    }
    if (Keycode == 75){
        hihatTransform()
        setTimeout(hihatRemoveTransform, 100);
    }


}
// trasform crash and ride
const rideTransform = () => {crashRideId.style = "transform: scale(1)";}
const rideRemoveTransform = () => {crashRideId.style = "transform: rotate(-1)";}
const crashTransform = () => {crashRideId.style = "transform: rotate(-11deg)";}
const crashRemoveTransform = () => {crashRideId.style = "transform: rotate(-7deg)";}

// transform hihat-top 
const hihatTransform = () => {hihatTopId.style = "top: 259px";}
const hihatRemoveTransform = () => {hihatTopId.style = "top: 257px";}

// transform keys
const keyTransform = () => {test.style = "transform: scale(1.2,1.2)";}
const keyRemoveTransform = () => {test.style = "transform: scale(1,1)";}


window.addEventListener('keydown', playAudio);
}

