
// Adding .addEventListener(click) to all the keys(w,a,s,d,j,k,l) using a for loop, to reduce repitation of same code for all keys.
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        // when ever the keys are pressed(on click), these two function will be called.
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    } );
}

// Adding .addEventListener(keypress), makeSound(), makeAnimation() will be triggered if the keys(w,a,s,d,j,k,l) are pressed on keyboard.
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    makeAnimation(event.key);
});

// This maekSound() function, will make the sound effect to the key which was pressed.
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

// This maekAnimation() will create a flash animation to notify that this instrument was clicked.
function makeAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}