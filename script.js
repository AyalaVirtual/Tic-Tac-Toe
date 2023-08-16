let h2 = document.querySelector("h2");

const row1 = document.querySelector("#row1");
const row2 = document.querySelector("#row2");
const row3 = document.querySelector("#row3");

const box = document.querySelectorAll(".box");

let playerXscore = document.querySelector("#playerX-score");
let tieCounter = document.querySelector("#tie-counter");
let playerOscore = document.querySelector("#playerO-score");

const button = document.querySelector("button");

const topLeft = document.querySelector("#top-left");
const topMiddle = document.querySelector("#top-middle");
const topRight = document.querySelector("#top-right");
const middleLeft = document.querySelector("#middle-left");
const centerBox = document.querySelector("#center");
const middleRight = document.querySelector("#middle-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomMiddle = document.querySelector("#bottom-middle");
const bottomRight = document.querySelector("#bottom-right");


function displayh2() {
    if (playerXscore > playerOscore) {
        h2.innerHTML = "Player 1 wins!";
    } else if (playerOscore > playerXscore) {
        h2.innerHTML = "Player 2 wins!";
    } else {
        h2.innerHTML = "It's a tie! Play again!";
    }
}

let currentPlayer = "Player 1";

function playGame() {
    

    /* topLeft || topMiddle || topRight || middleLeft | centerBox || middleRight || bottomLeft || bottomMiddle || bottomRight */

    if (box.innerHTML === "" && currentPlayer === "Player 1") {
        box.innerHTML = currentPlayer;
        currentPlayer = "Player 2";
    } else (box.innerHTML === "" && currentPlayer === "Player 2") {
        box.innerHTML = currentPlayer;
        currentPlayer = "Player 1";
    }

}


function playAgain(event) {
    event.preventDefault();
    playGame();
}




