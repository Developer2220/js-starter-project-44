const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndPrimeAnswer = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 10);
  const question = getRandomNumber();
  const isPrime = (number) => {
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
  const getCorrectAnswer = isPrime(question);
  return [question, getCorrectAnswer];
};

export { gameRules, getQuestionAndPrimeAnswer };
