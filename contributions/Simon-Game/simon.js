let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;
let score = 0;
let highScore = 0;
on(); // Overlay page appears when the website is reloaded

// Starting the game when Enter is pressed
$(document).keypress(function(event){
    let key = event.code;
    console.log(key);
    if(!started && key == "Enter"){
        $("#score").text("Score: " + score);
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
    off();
});

// Starting the game when Enetr button on screen is clicked
$(".enter-btn").click(function(){
    $("#score").text("Score: " + score);
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    off();
});

// Function when color button is pressed
$(".btn").click(function(){
    if(started){
        let userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
    
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
    }
});

// Checking the user pattern pressed with the actual game pattern
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)
            score += level*10;
            $("#score").text("Score: " + score);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        on();
        gameOver();
    }
}

// Generating a random color for next sequence
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

// Animation to know when the color button is pressed
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Playing sound when color button is triggered
function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Maintaining high score and set initial values for next game
function gameOver() {
    // If present score is greater than high score it is updated
    if(score>highScore){
        highScore = score;
    }

    $("#high-score").text("Highest Score: " + highScore);
    level = 0;
    score = 0;
    gamePattern = [];
    started = false;
}

// Overlay page display on
function on(){
    document.getElementById("overlay").style.display = "block";
}

// Overlay page display off
function off(){
    document.getElementById("overlay").style.display = "none";
}
