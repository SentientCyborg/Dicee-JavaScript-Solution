function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateImage(num, img) {
    document.querySelector(img).src = "images/dice" + num + ".png";
}

function announceWinner(num1, num2) {
    if (randomNumber1 == randomNumber2) {
        winner = "🚩 Draw! 🚩";
    } else if (randomNumber1 > randomNumber2) {
        winner = "🚩 Player 1 Wins!";
    } else {
        winner = "Player 2 Wins! 🚩";
    }
    return document.querySelector("h1").innerHTML = winner;
}

var randomNumber1 = rollD6();
updateImage(randomNumber1, ".img1");

var randomNumber2 = rollD6();
updateImage(randomNumber2, ".img2");

announceWinner(randomNumber1, randomNumber2);
