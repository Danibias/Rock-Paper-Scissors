// Make the computer pick a choice at random between rock, paper, or scissors.

const getComputerChoice = () => {

    const randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) {

        case 0:
            return console.log("rock");
        case 1:
            return console.log("paper");
        case 2: 
            return console.log("scissors");
        default:
            return console.log("rock");  
    }
}
