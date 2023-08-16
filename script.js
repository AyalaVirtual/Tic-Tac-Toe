let h2 = document.querySelector("h2");

const boxes = document.querySelectorAll(".boxes");

const topLeftValue = document.querySelector("#top-left").innerHTML;
const topMiddleValue = document.querySelector("#top-middle").innerHTML;
const topRightValue = document.querySelector("#top-right").innerHTML;
const middleLeftValue = document.querySelector("#middle-left").innerHTML;
const centerValue = document.querySelector("#center").innerHTML;
const middleRightValue = document.querySelector("#middle-right").innerHTML;
const bottomLeftValue = document.querySelector("#bottom-left").innerHTML;
const bottomMiddleValue = document.querySelector("#bottom-middle").innerHTML;
const bottomRightValue = document.querySelector("#bottom-right").innerHTML;

let player1Score = document.querySelector("#player1-score").innerHTML;
let tieCounter = document.querySelector("#tie-counter").innerHTML;
let player2Score = document.querySelector("#player2-score").innerHTML;

const button = document.querySelector("button");


let currentPlayer = "Player 1";

function switchPlayers() {
    boxes.forEach(box => {
        if (box.innerHTML === "" && currentPlayer === "Player 1") {
            box.innerHTML = currentPlayer;
            currentPlayer = "Player 2";
        } else if (box.innerHTML === "" && currentPlayer === "Player 2") {
            box.innerHTML = currentPlayer;
            currentPlayer = "Player 1";
        }
    })
}


function displayPlayerChoice(box) {
    if (currentPlayer === "Player 1") {
        box.innerHTML = "X";
        
        if ((topLeftValue === "X" && topMiddleValue === "X" && topRightValue === "X") || (middleLeftValue === "X" && centerValue === "X" && middleRightValue === "X") || (bottomLeftValue === "X" && bottomMiddleValue === "X" && bottomRightValue === "X") || (topLeftValue === "X" && centerValue === "X" && bottomRightValue === "X") || (topRightValue === "X" && centerValue === "X" && bottomLeftValue === "X")) {
            h2.innerHTML = "Player 1 wins!";

        } else if ((topLeftValue === "O" && topMiddleValue === "X" && topRightValue === "O") || (middleLeftValue === "O" && centerValue === "O" && middleRightValue === "O") || (bottomLeftValue === "O" && bottomMiddleValue === "O" && bottomRightValue === "O") || (topLeftValue === "O" && centerValue === "O" && bottomRightValue === "X") || (topRightValue === "O" && centerValue === "O" && bottomLeftValue === "O")) {
            h2.innerHTML = "Player 2 wins!"

        } else {
            h2.innerHTML = "It's a tie!";
        }

    } else {
        box.innerHTML = "O";
    }
}


function updateScores() {
    if (h2.innerHTML === "Player 1 wins!") {
        player1Score = parseInt(player1Score.innerHTML) + 1;
    } else if (h2.innerHTML === "Player 2 wins!") {
        player2Score = parseInt(player2Score.innerHTML) + 1;
    } else if (h2.innerHTML === "It's a tie!") {
        tieCounter = parseInt(tieCounter.innerHTML) + 1;
    }
}


function updateCurrentPlayerDisplay() {
    
}

function playGame() {
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if (box.innerHTML === "") {
                displayPlayerChoice(box);
                switchPlayers();
                updateScores();
                updateCurrentPlayerDisplay();
            }
        })
    })
}


function playAgain(event) {
    event.preventDefault();
    playGame();
} "