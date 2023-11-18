// Created on iPad.
document.querySelector(".btn").addEventListener("click", rollDice);

function rollDice() {
    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").src = `./images/dice${player1}.png`;
    document.querySelector(".img2").src = `./images/dice${player2}.png`;

    if ( player1 > player2 ) {
        document.querySelector(".container h1").innerText = "Player 1 Wins!";
    } else if ( player2 > player1 ) {
        document.querySelector(".container h1").innerText = "Player 2 Wins!";
    } else {
        document.querySelector(".container h1").innerText = "Draw..."
    }
}