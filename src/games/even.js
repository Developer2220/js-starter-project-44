const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

// const isEven = (x) => x % 2 === 0;

const evenGame = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const question = getRandomNumber();
  // const getCorrectAnswer = isEven(question) ? 'yes' : 'no';

  const correctAnswer = (x) => {
    let result;
    if (x % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };
  const getCorrectAnswer = correctAnswer(question);
  return [question, getCorrectAnswer];
};

export { gameRules, evenGame };
