'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
var incorrect = new Audio('incorrect.mp3');
var cheer = new Audio('hooray.mp3');
var fail = new Audio('dundundun.mp3');
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

//    Show Guess Number
// document.querySelector('.number').textContent = number;
/*
document.addEventListener('keydown', keyPressed);
function keyPressed(e) {
    console.log(e.key);
    console.log(e.keyCode);
}
//
//*/

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        // Trigger the click event when Enter key is pressed
        document.querySelector('.check').click();
    }
});

//
//
// document.querySelector('.check').addEventListener('keypress', function (e) {
//     //
//     if (e.key === 'Enter' || e.keyCode === 13) {
//         document.querySelector('.check').click();
//     }
// });

//
//
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        //document.querySelector('.message').textContent = 'Numbers Only';
        displayMessage('Numbers Only!');
        // GUESSES CORRECT NUMBER
    } else if (guess > 20 || guess < 1) {
        //document.querySelector('.message').textContent = 'Numbers Only';
        displayMessage('Numbers between 1 - 20.');
        document.querySelector('.guess').value = '';

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
        score = score - 5;
        document.querySelector('.guess').select();
        if (score > 1) {
            displayMessage(guess < number ? 'Higher!' : 'Lower!');
            document.querySelector('.score').textContent = score;
            incorrect.play();
        } else {
            displayMessage('❌Sorry! You LOSE!❌');
            fail.play();
            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#c70505';
            document.querySelector('.number').textContent = number;
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
