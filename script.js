'use strict';

let randomNum = Math.trunc((Math.random() * 20) + 1)
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body')
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess').value)

    // empty input | number is correct | number is high or low
    if (score > 1) {
        if (!guessNum) {
            message.textContent = '⛔️ No number!';
        } else if (guessNum === randomNum) {
            message.textContent = '🎉 Correct Number!';
            number.textContent = guessNum;
            number.style.width = '30rem';
            body.style.backgroundColor = '#60b347';
            score > highscore ? highscore = score : null;
            document.querySelector('.highscore').textContent = highscore;
        } else {
            guessNum > randomNum ? message.textContent = '📈 Too high!' : message.textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        message.textContent = '😕 You lost, sorry!';
        body.style.backgroundColor = '#ff2626';
    }
})

document.querySelector('.again').addEventListener('click', function () {
    message.textContent = 'Start guessing...';
    body.style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = '20';
    number.style.width = '15rem';
    number.textContent = '?'
    document.querySelector('.guess').value = '';
    randomNum = Math.trunc((Math.random() * 20) + 1);
})