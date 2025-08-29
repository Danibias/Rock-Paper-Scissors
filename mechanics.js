//keep track of the players score
let humanScore = 0;
let computerScore = 0;

// Make the computer pick a choice at random between rock, paper, or scissors.
const getComputerChoice = () => 
{
    const randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) 
    {
        case 0:return "Rock";

        case 1:return "Paper";

        case 2:return "Scissors";
    }      
}
// Update the score for each round
const updateScore = () => score.textContent = `User: ${humanScore} Computer: ${computerScore}`;

// Reset the game
const reset = document.createElement("button");
reset.textContent = "Reset";
reset.disabled = true;

reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    result.textContent = "Let's Play!";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    reset.disabled = true;
});



//Checks who got 5 points and finish the game
const checkGameOver = () => {
    if (humanScore === 5 || computerScore === 5) 
    {
        const winner = humanScore === 5 ? "You Win!" : "Computer Wins!";
        result.textContent = `Game Over! ${winner}`;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        reset.disabled = false;
    }
}

// play a single round
const playRound = (humanChoice, computerChoice) => 
{
    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!"
        updateScore();
        
    } 
    else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++
        updateScore();
        checkGameOver();
    } 
    else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore++
        updateScore();
        checkGameOver();
    }
};

const rock = document.createElement("button");
rock.textContent = "Rock"
rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
})

const paper = document.createElement("button");
paper.textContent = "Paper"
paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
})

const scissors = document.createElement("button");
scissors.textContent = "Scissors"
scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
})

document.body.append(rock, paper, scissors);

const result = document.createElement("div");
result.textContent = "Let's Play!"
document.body.appendChild(result)

const score = document.createElement("p")
score.textContent = `User ${humanScore} Computer: ${computerScore}`
result.insertAdjacentElement("afterend",score);

document.body.appendChild(reset);
