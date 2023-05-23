'use strict';

// Function that generated Random number in range : [min,max]
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber = getRandomNumber(0,20);
  let score = 20;
  let highScore =0;
// Function to set message ( To Avoid DRY )
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){
    let inputNumber = Number(document.querySelector('.guess').value);
    let flag = false;
    // let score = document.querySelector('.score').value;
    
    // Base Scenario ( No Input )
    document.querySelector('.number').textContent  = randomNumber;
    if(!inputNumber){
        // document.querySelector('.message').textContent = 'No  Input';
        displayMessage('No Input');
    }
    if(inputNumber === randomNumber){
        // document.querySelector('.message').textContent = 'Correct Numberrr';
        displayMessage('Correct Numberrrr')
        document.body.style.backgroundColor = "green";
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }

    }
    else if(inputNumber !== randomNumber){
        flag = true;
        document.querySelector('.message').textContent = inputNumber > randomNumber ?'Too High' : 'Too Low';
    }
    // else if(inputNumber > randomNumber){
    //     document.querySelector('.message').textContent = 'Too High';
    //     flag = true;
    // }
    // else{
    //     document.querySelector('.message').textContent = 'Too Low';
    //     flag = true;
    // }
    if(flag) {
        score > 0 ? score-- : 0;
        if(score === 0) {
            document.querySelector('.message').textContent = 'You have Lost please Stoopppp';
            displayMessage('You have Lost please Stoopppp');
        }
        document.querySelector('.score').textContent = score;
    }


});
/* xCoding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)*/
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    randomNumber = getRandomNumber(0,20);
    console.log(randomNumber);
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent=score;
    
})

