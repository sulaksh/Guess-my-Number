'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guess = Number(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent = 'Too High';
  //     // score--;
  //     // document.querySelector('.score').textContent = score;
  //     tooHigh();
  //   } else {
  //     // document.querySelector('.message').textContent = 'You lost';
  //     // document.querySelector('.score').textContent = 0;
  //     youLost();
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent = 'Too Low';
  //     // score--;
  //     // document.querySelector('.score').textContent = score;
  //     tooLow();
  //   } else {
  //     // document.querySelector('.message').textContent = 'You lost';
  //     // document.querySelector('.score').textContent = 0;
  //     youLost();
  //   }
  // }
  // console.log(guess, typeof guess);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
