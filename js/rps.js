let computerSelection;
let playerSelection;

const optionsArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return optionsArray[~~(Math.random() * optionsArray.length)];
}

function getPlayerChoice() {
    let playerInput = prompt("Your move: ").toLowerCase();
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
}

function playRound(playerSelection, computerSelection) {
    console.log(`You: ${playerSelection}`);
    console.log(`AI: ${computerSelection}`);
    
    if (playerSelection == computerSelection) {
        console.log("Tied Game!");
    } else if (
        playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper" ){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));