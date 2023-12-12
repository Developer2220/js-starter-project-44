import startGame from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'What is the result of the expression?';

const operations = ['-', '+', '*'];

const doMath = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getRandomOperation = () => {
  const randomOperation = Math.floor(Math.random() * operations.length);
  return operations[randomOperation];
};

const getQuestionAndCorrectAnswer = () => {
  const randomNumberFist = getRandomNumber();
  const randomNumberSecond = getRandomNumber();
  const operation = getRandomOperation();

  const getCorrectAnswer = doMath(
    randomNumberFist,
    randomNumberSecond,
    operation,
  ).toString();
  const question = `${randomNumberFist} ${operation} ${randomNumberSecond}`;
  return [question, getCorrectAnswer];
};

export default () => {
  startGame(gameRules, getQuestionAndCorrectAnswer);
};
