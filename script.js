function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let compChoice = ''
    switch(randNum){
        case 1: 
            compChoice = 'r';
            break;
        case 2:
            compChoice = 's';    
            break;
        case 3:
            compChoice = 'p';
            break;
    }
    return compChoice;
    
}

function getHumanChoice(){
    let humanChoice = prompt("What would you like to play? (r/p/s): ").toLowerCase();
    return humanChoice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log('It\'s a tie');
    } 
    else if (
        (humanChoice === 'r' && computerChoice == 's')|| 
        (humanChoice === 's' && computerChoice == 'p')||
        (humanChoice === 'p' && computerChoice == 'r')
    ) {
        console.log('You Win!');
        humanScore += 1;
    }
    else{
        console.log('You Lose!');
        computerScore += 1;
    }
}


function playGame(humanChoice){
    let computerChoice = getComputerChoice();;
    playRound(humanChoice, computerChoice);

    div.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    return (`Human: ${humanScore} Computer: ${computerScore}`);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const div = document.querySelector(".score");


rock.addEventListener("click", () => console.log(playGame('r')));
paper.addEventListener("click", () => console.log(playGame('p')));
scissors.addEventListener("click", () => console.log(playGame('s')));

