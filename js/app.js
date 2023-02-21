let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// Gets AI selection //
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    aiChoice = choices[~~(Math.random() * choices.length)];
    return aiChoice;
}

// gets player selection //
// function getPlayerChoice() {
//     let playerInput = prompt("Your move: ").toLowerCase();
//     return playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
// }

// displays scoreboard //
function keepScore(playerScore, computerScore) {
    console.log(playerScore);
    console.log(computerScore);
}

// Plays a round & handles game logic //
function playRound(playerSelection, computerSelection) {
    console.log(`You: ${playerSelection}`);
    console.log(`AI: ${computerSelection}`);
    
    if (playerSelection === computerSelection) {
        console.log("Tied Game!");
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ){
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
    keepScore(playerScore, computerScore);
    console.log("--------------------")
}

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice())
})

paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice())
})

scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice())
})

// loops game for 5 rounds and handles game ending score //
function game() {
    // for (i = 0; i < 5; i++) {
    //     // computerSelection = getComputerChoice();
    //     // playerSelection = getPlayerChoice();
    //     playRound(playerSelection, computerSelection); 
    // }
    //     console.log("~~~GAME OVER~~~")
    //     if (playerScore === computerScore) {
    //         console.log("TIE GAME")
    //     } else if (playerScore > computerScore) {
    //         console.log("YOU WIN")
    //     } else if (playerScore < computerScore) {
    //             console.log("YOU LOSE")
    //     }
}

game();
