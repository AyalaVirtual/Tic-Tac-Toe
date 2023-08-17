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
            
            // console.log(topLeft.innerText);

            // Check win conditions for Player 1
            if ((topLeft.innerText === "X" && topMiddle.innerText === "X" && topRight.innerText === "X") || (middleLeft.innerText === "X" && center.innerText === "X" && middleRight.innerText === "X") || (bottomLeft.innerText === "X" && bottomMiddle.innerText === "X" && bottomRight.innerText === "X") || (topLeft.innerText === "X" && center.innerText === "X" && bottomRight.innerText === "X") || (topRight.innerText === "X" && center.innerText === "X" && bottomLeft.innerText === "X") || (topLeft.innerText === "X" && middleLeft.innerText === "X" && bottomLeft.innerText === "X") || (topMiddle.innerText === "X" && center.innerText === "X" && bottomMiddle.innerText === "X") || (topRight.innerText === "X" && middleRight.innerText === "X" && bottomRight.innerText === "X")) {

                h2.innerHTML = "Player 1 wins!";
                player1Score += 1;

            } else {
                currentPlayer = "Player 2";
                h2.innerHTML = "Player 2's turn!";
            }
            
        } else if (currentPlayer === "Player 2") {
            clickedBox.innerHTML = "O";

            // Check win conditions for Player 2
            if ((topLeft.innerText === "O" && topMiddle.innerText === "O" && topRight.innerText === "O") || (middleLeft.innerText === "O" && center.innerText === "O" && middleRight.innerText === "O") || (bottomLeft.innerText === "O" && bottomMiddle.innerText === "O" && bottomRight.innerText === "O") || (topLeft.innerText === "O" && center.innerText === "O" && bottomRight.innerText === "O") || (topRight.innerText === "O" && center.innerText === "O" && bottomLeft.innerText === "O") || (topLeft.innerText === "O" && middleLeft.innerText === "O" && bottomLeft.innerText === "O") || (topMiddle.innerText === "O" && center.innerText === "O" && bottomMiddle.innerText === "O") || (topRight.innerText === "O" && middleRight.innerText === "O" && bottomRight.innerText === "O")) {
                
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
    })

    h2.innerHTML = "";
    currentPlayer = "Player 1";
}

// Add event listener to Play Again button 
button.addEventListener("click", playAgain);
