import startGame from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const correctAnswer = (x) => {
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
  const getCorrectAnswer = correctAnswer(question);
  return [question, getCorrectAnswer];
};

export default () => {
  startGame(gameRules, evenGame);
};
