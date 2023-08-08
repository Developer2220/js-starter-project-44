/* eslint-disable no-param-reassign */
const gameRules = 'Find the greatest common divisor of given numbers.';

const getQuestionAndNodAnswer = () => {
  const getRandomNumberFist = () => Math.floor(Math.random() * 100);
  const getRandomNumberSecond = () => Math.floor(Math.random() * 100);
  const randomNumberFist = getRandomNumberFist();
  const randomNumberSecond = getRandomNumberSecond();

  const nod = (a, b) => {
    while ((a !== 0) && (b !== 0)) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };
  const question = `${randomNumberFist} ${randomNumberSecond}`;
  const getCorrectAnswer = String(nod(randomNumberFist, randomNumberSecond));

  return [question, getCorrectAnswer];
};

export { gameRules, getQuestionAndNodAnswer };
