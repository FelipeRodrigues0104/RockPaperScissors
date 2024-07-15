let playerScore = 0;
let computerScore = 0;

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

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    if (playerScore === 5) {
        document.getElementById('finalResult').textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('finalResult').textContent = "Sorry, you lost the game. Computer wins!";
        disableButtons();
    }
}



function addNewDivButtons() {
    const container = document.querySelector("#container");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "buttonsDiv";
    buttonsDiv.style.border = "5px solid black";
    buttonsDiv.style.backgroundColor = "yellow";

    const h1Text = document.createElement("h1");
    h1Text.classList.add("h1Text");
    h1Text.textContent = "Pick your choice.";

    const rockButton = document.createElement("button");
    rockButton.id = "rock";
    rockButton.textContent = "Rock";

    const paperButton = document.createElement("button");
    paperButton.id = "paper";
    paperButton.textContent = "Paper";

    const scissorsButton = document.createElement("button");
    scissorsButton.id = "scissors";
    scissorsButton.textContent = "Scissors";

    const resultParagraph = document.createElement("p");
    resultParagraph.id = "result";

    const scoreParagraph = document.createElement("p");
    scoreParagraph.id = "score";
    scoreParagraph.textContent = "Player: 0, Computer: 0";

    const finalResultParagraph = document.createElement("p");
    finalResultParagraph.id = "finalResult";

    buttonsDiv.appendChild(h1Text);
    buttonsDiv.appendChild(rockButton);
    buttonsDiv.appendChild(paperButton);
    buttonsDiv.appendChild(scissorsButton);
    buttonsDiv.appendChild(resultParagraph);
    buttonsDiv.appendChild(scoreParagraph);
    buttonsDiv.appendChild(finalResultParagraph);
    container.appendChild(buttonsDiv);

    rockButton.addEventListener('click', function() {
        playRound('rock');
    });
    paperButton.addEventListener('click', function() {
        playRound('paper');
    });
    scissorsButton.addEventListener('click', function() {
        playRound('scissors');
    });
}

document.getElementById('rpsButton').addEventListener('click', addNewDivButtons);
