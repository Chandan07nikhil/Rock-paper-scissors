let userScore = 0;
let compScore = 0;

let msgBoard = document.querySelector('.display-box');
let msgText = document.querySelector('.msg');
let playerScore = document.querySelector('#player-score');
let comScore = document.querySelector('#comp-score');

const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let userChoice = button.getAttribute('id');
        playGame(userChoice);
    })
});

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msgText.innerHTML = `You Win! your ${userChoice} beats  ${compChoice}`;
        msgText.style.backgroundColor = 'green';
        playerScore.innerHTML = ++userScore;
    }
    else{
        msgText.innerHTML = `You lost! ${compChoice} beats your ${userChoice}`;
        msgText.style.backgroundColor = 'red';
        comScore.innerHTML = ++compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();    

    if(userChoice === compChoice) {
        msgText.innerHTML = `Game was Draw. your choice ${userChoice} Play again!`;
        msgText.style.backgroundColor = 'rgb(9,24,42)'
    }
    else{
       let userWin = true;

       if(userChoice === 'rock'){
        userWin = compChoice === 'paper' ? false : true;
       }
       else if(userChoice === 'paper'){
        userWin = compChoice === 'scissors' ? false : true;
       }
       else{
        userWin = compChoice === 'rock' ? false : true;
       }
       showWinner(userWin, userChoice, compChoice);
    }
}



