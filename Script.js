function randomGenerator() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    let tool = randomGenerator();
    if (tool == 1) {
        return "scissors";
    } else if (tool == 2) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let answer = prompt("Please enter one of the following: rock, paper, or scissors.");
    const choice = answer.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Invalid input. Please enter one of the following: rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let resultMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;
    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
        return { winner: "tie", message: resultMessage };
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "rock")) {
        resultMessage += "You win this round!";
        return { winner: "human", message: resultMessage };
    } else {
        resultMessage += "Computer wins this round!";
        return { winner: "computer", message: resultMessage };
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const roundResult = playRound();
        if (roundResult.winner === "human") {
            playerScore++;
        } else if (roundResult.winner === "computer") {
            computerScore++;
        }
        document.getElementById('result').textContent = roundResult.message;
        document.getElementById('score').textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    }
    if (playerScore > computerScore) {
        document.getElementById('finalResult').textContent = "You are the winner!";
    } else if (playerScore < computerScore) {
        document.getElementById('finalResult').textContent = "Computer is the winner!";
    } else {
        document.getElementById('finalResult').textContent = "It's a tie!";
    }
}

document.getElementById('rpsButton').addEventListener('click', playGame);
