let fnum = document.getElementById("first");
let snum = document.getElementById("second");
let uIn = document.getElementById("userInput");
let gameRes = document.getElementById("gameResult");

let sucmsg = "Congratulations! You got it right.";
let trymsg = "Please Try Again!";

function restart() {
    let firstrandom = Math.random() * 100;
    let secrandomNumber = Math.random() * 100;

    fnum.textContent = Math.ceil(firstrandom);
    snum.textContent = Math.ceil(secrandomNumber);

    gameRes.textContent = "";
    uIn.value = "";
}

restart();

function check() {
    let frandInt = parseInt(fnum.textContent);
    let secInt = parseInt(snum.textContent);
    let userInputValue = parseInt(uIn.value);

    let sumOfNum = frandInt + secInt;

    if (userInputValue === sumOfNum) {
        gameRes.textContent = sucmsg;
        gameRes.style.backgroundColor = "#028a0f";
    } else {
        gameRes.textContent = trymsg;
        gameRes.style.backgroundColor = "#1e217c";
    }
}