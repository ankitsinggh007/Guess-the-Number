'use strict';
let guess = document.querySelector('.guess');
let question = document.querySelector('.number');
let number = parseInt(Math.random() * 20);
let score = document.querySelector('.score');
let a = Number(score.textContent);
let highestscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let again = document.querySelector('.again');
again.addEventListener('click', function () {
  question.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  question.textContent = '?';
  message.textContent = 'Star guessing...';
  score.textContent = '20';
  a = 20;
  guess.value = '';
  number = parseInt(Math.random() * 20);
});
document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.guess').value);
  console.log(number);
  if (!value) {
    message.textContent = 'provide no.';
    console.log(value);
  } else if (value < number) {
    if (a < 0) message.textContent = 'Lost Game';
    else {
      message.textContent = 'Too Low';
      a--;
      score.textContent = a.toString();
    }
  } else if (value > number) {
    if (a < 0) message.textContent = 'Lost Game';
    else {
      message.textContent = 'Too High';
      a--;
      score.textContent = a.toString();
    }
  } else {
    message.textContent = 'congratulation';
    question.textContent = number;
    if (a > Number(highestscore.textContent)) {
      highestscore.textContent = a.toString();
    }
    question.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#9CD670';
  }
});
