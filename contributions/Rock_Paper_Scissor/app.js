const a = document.querySelector("#img1");
const b = document.querySelector("#img2");
const c = document.querySelector("#img3");
let player = document.querySelector("#playerscore");
let computer = document.querySelector("#enemyscore")
let player_score = parseInt(document.querySelector("#playerscore").innerText);
let computer_score = parseInt(document.querySelector("#enemyscore").innerText);
let score_value = document.querySelector("#scoreselect");
function reset1() {
    document.querySelector(".score").style.width = "48px";
    document.querySelector("#result1").style.display = "none";
    document.querySelector("#result2").style.display = "none";
    document.querySelector("#result").style.display = "block";
    ps = 0, cs = 0;
    player.innerText = ps;
    computer.innerText = cs;
}
score_value.addEventListener("click", function () {
    score = parseInt(this.value);
    reset1();
})
let reset = document.querySelector("button");
var user;
let start = false;
let ps = 0, cs = 0;
function check(user, d) {
    if (d === 1 && user === 2) {
        ps += 1;
    }
    else if (d === 1 && user === 3) {
        cs += 1;
    }
    else if (d === 2 && user === 1) {
        cs += 1;
    }
    else if (d === 2 && user === 3) {
        ps += 1;
    }
    else if (d === 3 && user === 1) {
        ps += 1;
    }
    else if (d === 3 && user === 2) {
        cs += 1;
    }
    else {
        ps += 1;
        cs += 1;
    }
    player.innerText = ps;
    computer.innerText = cs;
    if (ps === score) {
        ps = 0;
        cs = 0;
        document.querySelector(".score").style.width = "390px";
        document.querySelector("#result2").style.display = "block";
        document.querySelector("#result").style.display = "none";
        player.innerText = ps;
        computer.innerText = cs;
    }
    else if (cs === score) {
        ps = 0;
        cs = 0;
        document.querySelector(".score").style.width = "400px";
        document.querySelector("#result1").style.width = "600px";
        document.querySelector("#result1").style.display = "block";
        document.querySelector("#result").style.display = "none";
        player.innerText = ps;
        computer.innerText = cs;
    }
}
let score = 4;
a.addEventListener('click', function () {
    user = 1;
    const d = Math.floor(Math.random() * 3) + 1;
    check(user, d);
});
b.addEventListener("click", function () {
    user = 2;
    const d = Math.floor(Math.random() * 3) + 1;
    check(user, d);
});
c.addEventListener("click", function () {
    user = 3;
    const d = Math.floor(Math.random() * 3) + 1;
    check(user, d);
});
reset.addEventListener("click", function () {
    document.querySelector(".score").style.width = "48px";
    document.querySelector("#result1").style.display = "none";
    document.querySelector("#result2").style.display = "none";
    document.querySelector("#result").style.display = "block";
    ps = 0, cs = 0;
    player.innerText = ps;
    computer.innerText = cs;
})
