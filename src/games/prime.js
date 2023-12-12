import startGame from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }
  let j = 2;
  while (j <= number / 2) {
    if (number % j === 0) {
      return 'no';
    }
    j += 1;
  }
  return 'yes';
};

const getQuestionAndPrimeAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getPrimeAnswer(question);
  return [question, correctAnswer];
};

export default () => {
  startGame(gameRules, getQuestionAndPrimeAnswer);
};
