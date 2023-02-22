const hacker = document.querySelector('#hacker');
const android = document.querySelector('#android');
const punk = document.querySelector('#punk');
const gameplayData = document.querySelector('.gameplayData')
const gameResult = document.querySelector('.gameResult')
const playerLives = document.querySelector('.playerLives')
const aiLives = document.querySelector('.aiLives')
const rounds = document.querySelector('.rounds')


let playerHealth = 5
let computerHealth = 5
let round = 0
let aiChoice;
let computerSelection;
let playerSelection;

// Gets AI selection //
function getComputerChoice() {
    const choices = ["Hacker", "Android", "Punk"];
    aiChoice = choices[~~(Math.random() * choices.length)];
    return aiChoice;
}

// Gets Player Selection based on which button is clicked
hacker.addEventListener('click', () => {
    playRound("Hacker", getComputerChoice())
    gameplayData.innerHTML = `-You choose Hacker and AI chose ${aiChoice}`
    
})

android.addEventListener('click', () => {
    playRound("Android", getComputerChoice())
    gameplayData.innerHTML = `-You choose Android and AI chose ${aiChoice}`
})

punk.addEventListener('click', () => {
    playRound("Punk", getComputerChoice())
    gameplayData.innerHTML = `-You choose Punk and AI chose ${aiChoice}`
})

// Displays Rounds Played
function countRounds() {
    round += 1
    rounds.innerHTML = `Round: ${round}`;
    return round;
}

// Displays Lives
function countLives(){
    playerLives.innerHTML = `${playerHealth}`
    aiLives.innerHTML = `${computerHealth}`
}

// Handles end game logic
function endGame() {
    const endGameResult = document.querySelector(".endGameResult")
    const gameOver = document.querySelector(".gameOver")
    if (playerHealth === 0) {
        endGameResult.innerHTML = "-You have lost your life."
        gameOver.innerHTML = "-GAME OVER"
    } else if (computerHealth === 0) {
        endGameResult.innerHTML = "-The AI has been destroyed."
        gameOver.innerHTML = "-GAME OVER"
    }
    
}

// Resets Game
function rebootGame() {
    const rebootGame = document.querySelector('.rebootGame');
    rebootGame.addEventListener('click', () => {
        window.location.reload();
    });
}

// Plays a round & handles game logic //
function playRound(playerSelection, computerSelection) {
    // computerSelection == getComputerChoice()
    if (playerSelection === computerSelection) {
        gameResult.innerHTML = '-The round is a tie'
    } else if (
        playerSelection === "Hacker" && computerSelection === "Android" ||
        playerSelection === "Android" && computerSelection === "Punk" ||
        playerSelection === "Punk" && computerSelection === "Hacker") {
        gameResult.innerHTML = '-The AI lost a life'
        computerHealth -= 1;
        // lives.innerHTML = `${computerHealth}`    
    } else {
        gameResult.innerHTML = '-You lost a life'
        playerHealth -= 1;
        // lives.innerHTML = `${playerHealth}`
    }
    countRounds();  
    countLives();
    endGame();
    rebootGame();
}

