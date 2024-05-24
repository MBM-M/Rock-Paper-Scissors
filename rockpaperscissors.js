let roll = ["rock", "paper", "scissors"];

let getComputerChoise = function() {
    let play = roll[Math.floor(Math.random()*roll.length)];
    return play;
}

//function getHumanChoice() {
//    let choice = /*prompt*/("Rock! Paper! Scissors! SHOOT!: ");
//    choice = choice.toLowerCase();
//    return choice;
//}

let humanScore = 0;
let computerScore = 0;

//function playGame() {
    
    //let humanSelection = '';
    //let computerSelection = getComputerChoise();

    let playRound = function(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("Computer Wins! Parer beats Rock!");
                computerScore++;
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            } else if (computerChoice === "scissors") {
                console.log("You Win! Rock beats Scissors!");
                humanScore++;
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            } else {
                console.log("It's a draw!");
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            }
        }else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("Computer Wins! Scissors beats Paper!");
                computerScore++;
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            } else if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock!");
                humanScore++;
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            } else {
                console.log("It's a draw!");
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("Computer Wins! Rock beats Scissors!");
                computerScore++;
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            } else if (computerChoice === "paper") {
                console.log("You Win! Scissors beats Paper!");
                humanScore++;
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            } else {
                console.log("It's a draw!");
                console.log("Score is: You: " + humanScore + " , Computer: " + computerScore);
            }
        }

            console.log("You chose: " + humanChoice);
            console.log("Computer chose: " + computerChoice);
            console.log('');
    }

    //playRound(humanSelection, computerSelection);
    //console.log('');
//}

//let n = 0;
/*
while (n < 5) {
    playGame();
    n++;
}*/

const container = document.querySelector("#display");

let rock = document.querySelector("#rock");

let paper = document.querySelector("#paper");

let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoise());
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoise());
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoise());
})

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);