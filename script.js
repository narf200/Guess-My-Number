'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener(
  'click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // Когда в инпуте ни чего нет
    if (!guess) {
      displayMessage('⛔ Не корректный номер!')

      // Когда игрок выиграл
    }else if (guess > 20){
      displayMessage('⛔ Не корректный номер!')
    } else if (guess === secretNumber) {
      displayMessage('🎉 Правильный номер!')
      displayNumber( secretNumber)

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // Когда число не правильное
    } else if(guess !== secretNumber){
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Слишком большое' : '📉 Слишком маленькое')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('🤯 Вы проиграли!')
        document.querySelector('.score').textContent = 0;
      }
    }
  });

  document.querySelector('.again').addEventListener(
    'click', function() {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;

      displayMessage('Игра начинается...')
      document.querySelector('.score').textContent = score;
      displayNumber('?')
      document.querySelector('.guess').value = ''

      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    }
  )

