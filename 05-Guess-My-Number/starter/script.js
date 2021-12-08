'use strict';
// console.log(document.querySelector('.message').textContent);

// To choose a text from class in HTML Document.
// document.querySelector(.message).textContent;

// To choose a text from id in HTML Document.
// document.querySelector(#message).textContent;

// To get existing text from class in HTML Document.
// document.querySelector(#message).value
// document.querySelector(#message).value or textContent = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScored = 0;

document.querySelector('.again').addEventListener('click', function () {
  
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guesing....';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Not a Number';
  } else if (guess === secretNumber) {
    
    
    document.querySelector('.message').textContent = '🎉 CORRECT';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScored) {
      highScored =score;
      document.querySelector('.highscore').textContent = highScored;
    } 

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent =
      'That is wrong!! TRY AGAIN';
  }
});
