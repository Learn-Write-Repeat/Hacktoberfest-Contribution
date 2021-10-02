
//random number for dice 1
var randomNumber = Math.random()*6;

randomNumber = Math.floor(randomNumber)+1;

var randomDiceImage = "dice"+randomNumber+".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//random number for dice 2
var randomNumber1 = Math.random()*6;

randomNumber1 = Math.floor(randomNumber1)+1;

var randomDiceImage1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage1);

//Result
if(randomNumber>randomNumber1){
  document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!"
}
else if (randomNumber==randomNumber1) {
  document.querySelector("h1").innerHTML = "Draw!"
}
else{
  document.querySelector("h1").innerHTML="🏁 Player 2 Wins!"
}
