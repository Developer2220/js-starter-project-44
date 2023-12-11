import startGame from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getNod = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  while ((firstNum !== 0) && (secondNum !== 0)) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum + secondNum;
};

const getQuestionAndNodAnswer = () => {
  const randomNumberFist = getRandomNumber();
  const randomNumberSecond = getRandomNumber();
  const question = `${randomNumberFist} ${randomNumberSecond}`;
  const getCorrectAnswer = String(getNod(randomNumberFist, randomNumberSecond));
  return [question, getCorrectAnswer];
};

export default () => {
  startGame(gameRules, getQuestionAndNodAnswer);
};
