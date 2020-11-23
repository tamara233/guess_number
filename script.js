'use strict';

const randomNum = Math.trunc((Math.random() * 20) + 1)
console.log(randomNum);
const message = document.querySelector('.message')
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess').value)
    console.log(guessNum);

    if (score > 0) {
        // empty input | number is correct | number is high or low
        if (!guessNum) {
            message.textContent = '⛔️ No number!'
        } else if (guessNum === randomNum) {
            message.textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = guessNum;
        } else {
            guessNum > randomNum ? message.textContent = '📈 Too high!' : message.textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score
        }
    } else {
        message.textContent = '😕 You lost, sorry!'
    }
})