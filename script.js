// Declare variables to access elements 
let player1Score = document.querySelector("#player1-score");
let tieCounter = document.querySelector("#tie-counter");
let player2Score = document.querySelector("#player2-score");

let boxes = document.querySelectorAll(".boxes");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");

// Set first player to Player 1 at start of game 
let currentPlayer = "Player 1";


// Helper function to update score after player wins 
function updateScore() {
    let player1 = parseInt(player1Score.innerText);
    let player2 = parseInt(player2Score.innerText);
    let ties = parseInt(tieCounter.innerText);

    if (currentPlayer === "Player 1" && h2.innerHTML !== "It's a tie!") {
        player1 += 1;
        player1Score.innerText = player1;

    } else if (currentPlayer === "Player 2" && h2.innerHTML !== "It's a tie!") {
        player2 += 1;
        player2Score.innerText = player2;

    } else if (h2.innerHTML === "It's a tie!") {
        ties += 1;
        tieCounter.innerText = ties;
    } 
}


// Helper function to disable continuous play after a player wins 
function disableClicks() {
    if (h2.innerHTML === "Player 1 wins!" || h2.innerHTML === "Player 2 wins!" || h2.innerHTML === "It's a tie!") {
        boxes.forEach(box => box.removeEventListener("click", playGame));

        return;
    }
}


// Event handler for squares 
function playGame(event) {
    let clickedBox = event.target;

    // Fetch the values of the squares 
    const topLeft = document.querySelector("#top-left");
    const topMiddle = document.querySelector("#top-middle");
    const topRight = document.querySelector("#top-right");
    const middleLeft = document.querySelector("#middle-left");
    const center = document.querySelector("#center");
    const middleRight = document.querySelector("#middle-right");
    const bottomLeft = document.querySelector("#bottom-left");
    const bottomMiddle = document.querySelector("#bottom-middle");
    const bottomRight = document.querySelector("#bottom-right");


    if (clickedBox.innerHTML === "") {
        if (currentPlayer === "Player 1") {
            
            clickedBox.innerHTML = "X";

            // Check win conditions for Player 1
            if ((topLeft.innerText === "X" && topMiddle.innerText === "X" && topRight.innerText === "X") || (middleLeft.innerText === "X" && center.innerText === "X" && middleRight.innerText === "X") || (bottomLeft.innerText === "X" && bottomMiddle.innerText === "X" && bottomRight.innerText === "X") || (topLeft.innerText === "X" && center.innerText === "X" && bottomRight.innerText === "X") || (topRight.innerText === "X" && center.innerText === "X" && bottomLeft.innerText === "X") || (topLeft.innerText === "X" && middleLeft.innerText === "X" && bottomLeft.innerText === "X") || (topMiddle.innerText === "X" && center.innerText === "X" && bottomMiddle.innerText === "X") || (topRight.innerText === "X" && middleRight.innerText === "X" && bottomRight.innerText === "X")) {

                h2.innerHTML = "Player 1 wins!";
                
                updateScore(); 
                disableClicks();

            // Check for empty squares on the board before switching turns 
            } else if (topLeft.innerText === "" || topMiddle.innerText === "" || topRight.innerText === "" || middleLeft.innerText === "" || center.innerText === "" || middleRight.innerText === "" || bottomLeft.innerText === "" || bottomMiddle.innerText === "" || bottomRight.innerText === "") {
                
                currentPlayer = "Player 2";
                h2.innerHTML = "Player 2's turn!";
            
            } else {

                h2.innerHTML = "It's a tie!";
                
                updateScore();
                disableClicks();
            
            }
            
        } else if (currentPlayer === "Player 2") {
            clickedBox.innerHTML = "O";

            // Check win conditions for Player 2
            if ((topLeft.innerText === "O" && topMiddle.innerText === "O" && topRight.innerText === "O") || (middleLeft.innerText === "O" && center.innerText === "O" && middleRight.innerText === "O") || (bottomLeft.innerText === "O" && bottomMiddle.innerText === "O" && bottomRight.innerText === "O") || (topLeft.innerText === "O" && center.innerText === "O" && bottomRight.innerText === "O") || (topRight.innerText === "O" && center.innerText === "O" && bottomLeft.innerText === "O") || (topLeft.innerText === "O" && middleLeft.innerText === "O" && bottomLeft.innerText === "O") || (topMiddle.innerText === "O" && center.innerText === "O" && bottomMiddle.innerText === "O") || (topRight.innerText === "O" && middleRight.innerText === "O" && bottomRight.innerText === "O")) {
                
                h2.innerHTML = "Player 2 wins!";
                
                updateScore();
                disableClicks();
            
            // Check for empty squares on the board before switching turns 
            } else if (topLeft.innerText === "" || topMiddle.innerText === "" || topRight.innerText === "" || middleLeft.innerText === "" || center.innerText === "" || middleRight.innerText === "" || bottomLeft.innerText === "" || bottomMiddle.innerText === "" || bottomRight.innerText === "") {

                currentPlayer = "Player 1";
                h2.innerHTML = "Player 1's turn!";
                                
            } else {

                h2.innerHTML = "It's a tie!";
                
                updateScore();
                disableClicks();
            
            }
       }
    }
}


// Add event listener to each square on the board 
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", playGame);
}


// Event handler for Play Again button 
function playAgain(event) {
    event.preventDefault();

    boxes.forEach(box => {
        box.innerHTML = "";
        box.addEventListener("click", playGame);
    })

    h2.innerHTML = "";
    currentPlayer = "Player 1";
}

// Add event listener to Play Again button 
button.addEventListener("click", playAgain);