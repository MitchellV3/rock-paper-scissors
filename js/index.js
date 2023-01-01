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

/*
function getPlayerChoice(){
    let playerChoice = prompt("Make a choice (Rock, Paper, Scissors)");
    return playerChoice.toUpperCase();
}
*/

function playRound(computerChoice, playerChoice){
    console.log(computerChoice);
    console.log(playerChoice);

    if (computerChoice == playerChoice) {
        gameResult("draw");
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS"){
        gameResult("lose");
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER"){
        gameResult("lose");
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK"){
        gameResult("lose");
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS"){
        gameResult("win");
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER"){
        gameResult("win");
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK"){
        gameResult("win");
    } else {
        return "Invalid input";
    }
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

const outputContainer = document.querySelector(".output-container");
const output = document.createElement("div");
output.classList.add("output");
outputContainer.appendChild(output);

const showResults = document.createElement("p");
output.classList.add("show-results");
output.appendChild(showResults);

function gameResult(result){

    if (result == "win"){
        showResults.textContent = "You win!";
    } else if (result == "lose") {
        showResults.textContent = "You lose!";
    } else if (result == "draw") {
        showResults.textContent = "Draw!";
    } else {
        showResults.textContent ="An error occurred";
    }

    
}

/*
function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(i = 1; i < 6; i++){
        let outcome = playRound(getComputerChoice(), getPlayerChoice());
        console.log(`Round ${i}:`);
        console.log(outcome);

        if (outcome == "You win!") {
            playerWins++;
        } else if (outcome == "You lose!") {
            computerWins++;
        } else if (outcome == "Draw!"){
            playerWins++;
            computerWins++;
        } else {
            return "An error occurred";
        }
    }

    if (playerWins > computerWins){
        return "You win the game!";
    } else if (computerWins > playerWins) {
        return "You lose the game!";
    } else if (playerWins == computerWins) {
        return "The game ends in a draw!";
    } else {
        return "An error occurred";
    }

}

console.log(game());
*/