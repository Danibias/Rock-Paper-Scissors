//keep track of the players score
let humanScore = 0;
let computerScore = 0;

// Make the computer pick a choice at random between rock, paper, or scissors.
const getComputerChoice = () => 
{
    const randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) 
    {
        case 0:
        return "rock";

        case 1:
        return "paper";

        case 2: 
        return "scissors";
    }      
}

// Ask the player to choose either rock, paper, or scissors.
const getHumanChoice = () => 
{
    const choice = prompt("Let's Play! Choose: rock, paper or scissors")
    return choice;

}

// play a single round
const playRound = (humanChoice, computerChoice) => 
{
    // Make humanChoice parameter case-insensitive
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        alert("It's a tie");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
};


const humanSelection = getHumanChoice();   
const computerSelection = getComputerChoice(); 

alert(`Computer chose: ${computerSelection}`);

playRound(humanSelection, computerSelection);

alert(`Human: ${humanScore} Computer: ${computerScore}`);



