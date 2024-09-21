'use strict';
let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').innerHTML = '?';
document.querySelector('.highscore').textContent = '0';
document.querySelector('.guess').value = '';



document.querySelector('.check')
.addEventListener('click', function (){

    
    let guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    

    if(!guess) {
        document.querySelector('.message')
        .textContent = '⛔️ Not a Number';
    }

    else if(guess > secretNumber) {
        if(score > 1 ){
            document.querySelector('.message')
        .textContent = '📈 Too Hight';
        document.querySelector('.score').textContent = score;
        score--;
        } else {
            document.querySelector('.message')
        .textContent = 'You Lost The game';
        document.querySelector('.score').textContent = 0;
        }
        
        
    }

    else if(guess < secretNumber ) {
        if(score >= 1 ){
            document.querySelector('.message')
        .textContent = '📉 Too Low!';
        document.querySelector('.score').textContent = score;
        score--;
        } else {
            document.querySelector('.message')
        .textContent = 'You Lost The game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#FF0000' ;

        };
        
    } else if (guess === secretNumber){
        document.querySelector('.message')
        .textContent = 'You Win';
        document.querySelector('body').style.backgroundColor = '#60b347' ;
        document.querySelector('.number').style.width = '30rem' ;        
        
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    };
   

}); 

document.querySelector('.again').addEventListener('click', function(){

     score = 20;
     secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222' ;
    document.querySelector('.number').style.width = '15rem' ;
   
   


})


