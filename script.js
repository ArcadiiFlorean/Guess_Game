'use strict';
/*console.log(document.querySelector('.message').textContent);

//pentru a selecta si a modifica textul in html
document.querySelector('.message').textContent = 'TopG';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Nu afișăm numărul secret în UI
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
