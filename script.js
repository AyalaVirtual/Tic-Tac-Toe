let player1Score = parseInt(document.querySelector("#player1-score").innerHTML);
let tieCounter = parseInt(document.querySelector("#tie-counter").innerHTML);
let player2Score = parseInt(document.querySelector("#player2-score").innerHTML);

let boxes = document.querySelectorAll(".boxes");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");

let currentPlayer = "Player 1";

// Event handler for squares 
function playGame(event) {
    let clickedBox = event.target;

    // Fetch the values of the squares 
    const topLeftValue = document.querySelector("#top-left").innerHTML;
    const topMiddleValue = document.querySelector("#top-middle").innerHTML;
    const topRightValue = document.querySelector("#top-right").innerHTML;
    const middleLeftValue = document.querySelector("#middle-left").innerHTML;
    const centerValue = document.querySelector("#center").innerHTML;
    const middleRightValue = document.querySelector("#middle-right").innerHTML;
    const bottomLeftValue = document.querySelector("#bottom-left").innerHTML;
    const bottomMiddleValue = document.querySelector("#bottom-middle").innerHTML;
    const bottomRightValue = document.querySelector("#bottom-right").innerHTML;


    if (clickedBox.innerHTML === "") {
        if (currentPlayer === "Player 1") {
            clickedBox.innerHTML = "X";
            
            // Check win conditions for Player 1
            if (
                (topLeftValue === "X" && topMiddleValue === "X" && topRightValue === "X") ||
                (middleLeftValue === "X" && centerValue === "X" && middleRightValue === "X") ||
                (bottomLeftValue === "X" && bottomMiddleValue === "X" && bottomRightValue === "X") ||
                (topLeftValue === "X" && centerValue === "X" && bottomRightValue === "X") ||
                (topRightValue === "X" && centerValue === "X" && bottomLeftValue === "X")
            ) {
                h2.innerHTML = "Player 1 wins!";
                player1Score += 1;
            } else {
                currentPlayer = "Player 2";
                h2.innerHTML = "Player 2's turn!";
            }
        } else if (currentPlayer === "Player 2") {
            clickedBox.innerHTML = "O";

            // Check win conditions for Player 2
            if (
                (topLeftValue === "O" && topMiddleValue === "O" && topRightValue === "O") ||
                (middleLeftValue === "O" && centerValue === "O" && middleRightValue === "O") ||
                (bottomLeftValue === "O" && bottomMiddleValue === "O" && bottomRightValue === "O") ||
                (topLeftValue === "O" && centerValue === "O" && bottomRightValue === "O") ||
                (topRightValue === "O" && centerValue === "O" && bottomLeftValue === "O")
            ) {
                h2.innerHTML = "Player 2 wins!";
                player2Score += 1;
            } else {
                currentPlayer = "Player 1";
                h2.innerHTML = "Player 1's turn!";
            }
        } else {
            h2.innerHTML = "It's a tie!";
            tieCounter += 1;
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
    });

    h2.innerHTML = "";
    currentPlayer = "Player 1";
}

// Add event listener to Play Again button 
button.addEventListener("click", playAgain);
