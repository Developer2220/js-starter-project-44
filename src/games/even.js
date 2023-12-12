import startGame from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (x) => {
  let result;
  if (x % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const evenGame = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

export default () => {
  startGame(gameRules, evenGame);
};
