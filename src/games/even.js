const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const question = getRandomNumber();
  const correctAnswer = (x) => {
    let result;
    if (x % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };
  const getCorrectAnswer = correctAnswer();
  return [question, getCorrectAnswer];
};

export { gameRules, evenGame };
