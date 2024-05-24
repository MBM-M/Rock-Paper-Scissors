let roll = ["rock", "paper", "scissors"];

let getComputerChoise = function() {
    let play = roll[Math.floor(Math.random()*roll.length)];
    return play;
}

let humanScore = 0;
let computerScore = 0;

let playRound = function(humanChoice, computerChoice) {

    if ((humanScore < 4) && (computerScore < 4)){
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore++;
                outcome.textContent = "Computer Wins! Parer beats Rock! Score is You: " + humanScore + " , Computer: " + computerScore;
            } else if (computerChoice === "scissors") {
                humanScore++;
                outcome.textContent = "You Win! Rock beats Scissors! Score is You: " + humanScore + " , Computer: " + computerScore;
            } else {
                outcome.textContent = "It's a draw! Score is You: " + humanScore + " , Computer: " + computerScore;
            }
        }else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore++;
                outcome.textContent = "Computer Wins! Scissors beats Paper! Score is: You: " + humanScore + " , Computer: " + computerScore;
            } else if (computerChoice === "rock") {
                humanScore++;
                outcome.textContent = "You Win! Paper beats Rock! Score is: You: " + humanScore + " , Computer: " + computerScore;
            } else {
                outcome.textContent = "It's a draw! Score is: You: " + humanScore + " , Computer: " + computerScore;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                outcome.textContent = "Computer Wins! Rock beats Scissors! Score is: You: " + humanScore + " , Computer: " + computerScore;
            } else if (computerChoice === "paper") {
                humanScore++;
                outcome.textContent = "You Win! Scissors beats Paper! Score is: You: " + humanScore + " , Computer: " + computerScore;
            } else {
                outcome.textContent = "It's a draw! Score is: You: " + humanScore + " , Computer: " + computerScore;
            }
        }
    }else{
        if (humanScore > computerScore){
            outcome.textContent = "THE WINNER IS... YOU!!! CONGRATS!!!";
        }else{
            outcome.textContent = "THE WINNER IS... THE COMPUTER. WOMP WOMP WOMP."
        }
    }
}



const container = document.querySelector("#display");

const choice = document.createElement("div");

container.appendChild(choice);

const call = document.createElement("p");
call.textContent = "FIRST TO 5 WINS. GOOD LUCK!!! ROCK, PAPER, SCISSORS..... SHOOT!!!";

choice.appendChild(call);

const result = document.createElement("div");
result.textContent = "RESULT: ";

container.appendChild(result);

let outcome = document.createElement("p");

result.appendChild(outcome);

let rock = document.createElement("button");
rock.textContent = "ROCK";

let paper = document.createElement("button");
paper.textContent = "PAPER";

let scissors = document.createElement("button");
scissors.textContent = "SCISSORS";

choice.appendChild(rock);
choice.appendChild(paper);
choice.appendChild(scissors);

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoise());
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoise());
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoise());
})