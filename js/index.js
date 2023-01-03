function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "ROCK";
    } else if (computerChoice == 1) {
        return "PAPER";
    } else if (computerChoice == 2) {
        return "SCISSORS";
    } else  {
        return "Something went wrong";
    }
}

function playRound(computerChoice, playerChoice){
    console.log(computerChoice);
    console.log(playerChoice);

    playerScore.style.color = "rgb(235, 235, 235)"
    computerScore.style.color = "rgb(235, 235, 235)"

    if (computerChoice == playerChoice) {
        game("draw");
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS"){
        game("lose");
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER"){
        game("lose");
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK"){
        game("lose");
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS"){
        game("win");
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER"){
        game("win");
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK"){
        game("win");
    } else {
        return "Invalid input";
    }

    displayPlayerUser.textContent = "Player";
    displayUser.appendChild(displayPlayerUser);

    displayComputerUser.textContent = "Computer";
    displayUser.appendChild(displayComputerUser);

    displayPlayerChoice.textContent = playerChoice;
    displayChoice.appendChild(displayPlayerChoice);

    displayComputerChoice.textContent = computerChoice;
    displayChoice.appendChild(displayComputerChoice);
}

const outputContainer = document.querySelector(".output-container");
const output = document.createElement("div");
output.classList.add("output");
outputContainer.appendChild(output);

const showResults = document.createElement("p");
showResults.classList.add("show-results");
output.appendChild(showResults);

const displayUser = document.createElement("div");
displayUser.classList.add("display-user");
output.appendChild(displayUser);

const displayPlayerUser = document.createElement("p");
displayPlayerUser.classList.add("player-user");
const displayComputerUser = document.createElement("p");
displayComputerUser.classList.add("computer-user");

const displayChoice = document.createElement("div");
displayChoice.classList.add("display-choice");
output.appendChild(displayChoice);

const displayPlayerChoice = document.createElement("p");
displayPlayerChoice.classList.add("player-choice");
const displayComputerChoice = document.createElement("p");
displayComputerChoice.classList.add("computer-choice");

const vl = document.createElement("div");
vl.classList.add("vl");

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");
output.appendChild(scoreContainer);

const playerScore = document.createElement("p");
playerScore.classList.add("player-score");
const computerScore = document.createElement("p");
computerScore.classList.add("computer-score");

let playerWins = 0;
let computerWins = 0;

function game(score){
    
    if (score == "win") {
        playerWins++;
        playerScore.style.color = "rgb(0, 128, 122)"
    } else if (score == "lose") {
        computerWins++;
        computerScore.style.color = "rgb(0, 128, 122)"
    } else if (score == "draw"){
        playerWins++;
        computerWins++;
    } else {
        return "An error occurred";
    }

    if (playerWins == 5 || computerWins == 5) {
        gameResult(playerWins, computerWins);   
        playerWins = 0;
        computerWins = 0;

    } else if (playerWins == 1 || computerWins == 1) {
        showResults.textContent = "";
    }

    playerScore.textContent = playerWins;
        scoreContainer.appendChild(playerScore);
    computerScore.textContent = computerWins;
        scoreContainer.appendChild(computerScore);
        showResults.appendChild(vl);

}

let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");

btnRock.addEventListener("click", (e) => {
    console.log(playRound(getComputerChoice(), "ROCK"));
});

btnPaper.addEventListener("click", (e) => {
    console.log(playRound(getComputerChoice(), "PAPER"));
});

btnScissors.addEventListener("click", (e) => {
    console.log(playRound(getComputerChoice(), "SCISSORS"));
});

function gameResult(playerWins, computerWins){

    showResults.style.color = "rgb(235, 235, 235)"

    if (playerWins > computerWins){
        showResults.textContent = "You win the game!";
        showResults.style.color = "rgb(0, 128, 122)"
    } else if (computerWins > playerWins) {
        showResults.textContent = "You lose the game!";
        showResults.style.color = "rgb(177, 77, 77)"
    } else if (playerWins == computerWins) {
        showResults.textContent = "The game ends in a draw!";
    } else {
        showResults.textContent = "An error occurred";
    }
}

