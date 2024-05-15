let roll = ["rock", "paper", "scissors"];

let play = function(){
    console.log(roll[(Math.floor(Math.random * roll.length))]);
}

play()