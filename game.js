function getComputerChoice(){
const choices = ["rock", "paper", "scissors"];
const computer = Math.floor(Math.random() * choices.length);


return choices[computer];
}



function getHumanChoice(){
let choice = prompt("from this list: 'rock, paper ,scissors'. what is ur choice?" )

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors" ) {
       choice = prompt("invalid options. please chose from either: rock or paper or scissors").toLowerCase()
    }
return choice;
}
       
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log("it is a tie")
    console.log( ` The computer chose this: ${computerChoice} and you chose this : ${humanChoice}`)

  }
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log( ` The computer chose this: ${computerChoice} and you chose this : ${humanChoice}`+"-------"+"you win")
    humanScore++
  } else {
    console.log(` The computer chose this: ${computerChoice} and you chose this : ${humanChoice}`+"--------"+"you loose!")
    computerScore++
  }
}



function playGame(){
    for(i = 0; i < 5; i++){

        console.log(`\n--- Round ${i + 1}---`)
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current score:- you: ${humanScore} and computerscore:- ${computerScore}`)
    }
}

playGame()

if(humanScore === computerScore){
    document.write("The game was a tie")
}else if(humanScore > computerScore){
    document.write(`Congratulation!!! You win `)
}else{
    document.write(`Try again, you Lost`)
}

document.write("\n"+humanScore+":")
document.write(computerScore)