// guess the number
// DONE: get usaervalue from input and save it to variable
// DONE: generate a random number and save it to variable called correctNumber
// DONE: console wheter guess is to high, low , or is correct
// DONE: create function called displayResult to move logic for gusess is too high or low
// DONE: complete showYouWon, showNumberAbove, showNumberBelow
// DONE: use the showYouWon function... within displayResult to display correct dialaog.
// DONE: Save the guess history in a variable called guesses
// DONE: Display the guess history using displayHistory() function
// DONE: Use the initGame() function to restart the game

// var to store correct number
let correctNumber = getRandomNumber();

// Variable to store list of guesses
let guesses =  [];



window.onload = function() {
    document.getElementById('num-submit').addEventListener("click", playGame);
    document.getElementById('restart-game').addEventListener("click", initGame);
    // getRandomNumber();
    
}

function playGame() {
    let numberGuess = document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuesshistory(numberGuess);
    displayHistory();
}

function displayResult(numberGuess){
    if(numberGuess > correctNumber)
    showNumberAbove();
    else if(numberGuess < correctNumber)
    showNumberBelow();
    else if(numberGuess == correctNumber)
    showYouWon();
}

function getRandomNumber(){
    // with Math.random() u will get no. between 0 and < 1. so we multiply it with 100
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber*100)+1;
    return wholeNumber;
}

function getDialog(dialogtype, text){
    switch(dialogtype){
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon(){
    const text = "Awesome job, you get it !";
    let dialog = getDialog('won', text);
    document.getElementById('result').innerHTML = dialog;
}

function showNumberAbove(){
    const text = "your guess is too high !";
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

function showNumberBelow(){
    const text = "Your guess is too low !";
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

function saveGuesshistory (guess){
    guesses.push(guess);
    console.log(guesses);
}

function displayHistory(guess){
    let index=guesses.length - 1;
    let list = "<ul class='list-group'>";
    while(index >= 0){
        list += "<li class='list-group-item list-group-item-secondary'>"+
        "You guessed" + guesses[index] + "</li>";
        index -= 1;
    }
    list +="</ul>"
    document.getElementById("history").innerHTML = list;
}

function initGame(){
    location.reload();
    // correctNumber = getRandomNumber();
    // document.getElementById('result').innerHTML = "";
    // guesses = [];
    // document.getElementById("history").innerHTML = "";
}