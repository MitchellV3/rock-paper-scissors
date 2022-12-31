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

function getPlayerChoice(){
    let playerChoice = prompt("Make a choice (Rock, Paper, Scissors)");
    return playerChoice.toUpperCase();
}

function playRound(computerChoice, playerChoice){
    console.log(computerChoice);
    console.log(playerChoice);

    if (computerChoice == playerChoice) {
        return "Draw!";
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS"){
        return "You lose!";
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER"){
        return "You lose!";
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK"){
        return "You lose!";
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS"){
        return "You win!";
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER"){
        return "You win!";
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK"){
        return "You win!";
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