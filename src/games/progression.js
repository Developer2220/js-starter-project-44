import startGame from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const getRandomNumberDifference = () => Math.floor(Math.random() * 5);
  let x = getRandomNumber();
  const y = getRandomNumberDifference();
  const arr = [];
  for (let i = 0; i <= 10; i += 1) {
    x += y;
    arr.push(x);
  }
  return arr;
};

const getQuestionAndProgressionAnswer = () => {
  const numbers = getProgression();

  const getRandomNumberOfProgression = (num) => {
    const rand = Math.floor(Math.random() * num.length);
    return num[rand];
  };

  const randomNumber = getRandomNumberOfProgression(numbers);

  const j = numbers.indexOf(randomNumber);
  if (j !== -1) {
    numbers.splice(j, 1, '..');
  }

  const doString = String(numbers);
  const question = doString.replace(/[,]/g, ' ');

  const getCorrectAnswer = String(randomNumber);

  return [question, getCorrectAnswer];
};

export default () => {
  startGame(gameRules, getQuestionAndProgressionAnswer);
};
