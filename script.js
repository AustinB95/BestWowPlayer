'use strict';

/*
document.querySelector('.message').textContent = 'Butt suck sauce';
document.querySelector('.score').textContent = '6969';
document.querySelector('.number').textContent = '14';
document.querySelector('.guess').value = 23;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
var fart = new Audio('fart.mp3');
var cheer = new Audio('hooray.mp3');
var fail = new Audio('dundundun.mp3');
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

//    Show Guess Number
// document.querySelector('.number').textContent = number;
//

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        //document.querySelector('.message').textContent = 'Numbers Only';
        displayMessage('Numbers Only!');
        // GUESSES CORRECT NUMBER
    } else if (guess === number) {
        //
        cheer.play();
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('body').style.backgroundColor = '#03e428';
        displayMessage('CORRECT!');
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highScore}`;
        document.querySelector('.check').textContent = '✔';
        document.querySelector('.check').disabled = true;

        //
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess < number ? 'Higher!' : 'Lower!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
            fart.play();
        } else {
            displayMessage('❌Sorry! You LOSE!❌');
            fail.play();
            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#c70505';
        }
    }
});
/*
    else if (guess < number) {
        if (score > 1) {
           displayMessage( 'Higher!';)
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
           displayMessage( '❌Sorry! You LOSE!❌');
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    } else {
        if (score > 1) {
           displayMessage( 'Lower!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
           displayMessage( '❌Sorry! You LOSE!❌');
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});
*/
// AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
    // document.querySelector(".label-highscore").textContent = `🥇 Highscore: ${highScore}`;
    displayMessage('Start Guessing...');
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.check').textContent = `Check!`;
    document.querySelector('.check').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';

    // Displays the Guess Number
    //document.querySelector(".number").textContent = number;
});
