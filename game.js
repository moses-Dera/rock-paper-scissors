function getComputerChoice(){
const comgames = ["rock", "paper", "scissors"];
const computerchoice = Math.floor(Math.random() * comgames.length);

return comgames[computerchoice];
}



function getHumanChoice(){
let HumanChoice = prompt("from this list: 'rock, paper ,scissors'. what is ur choice?" )

return HumanChoice;
}
    
