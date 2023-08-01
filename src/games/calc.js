const gameRules = 'What is the result of the expression?';

const operations = ['-', '+', '*'];

const doMath = (a, b, operator) => {
  let math = 0;
  switch (operator) {
    case '+':
      math = a + b;
      break;

    case '-':
      math = a - b;
      break;

    case '*':
      math = a * b;
      break;

    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return math;
};

const getQuestionAndCorrectAnswer = () => {
  const getRandomNumberFist = () => Math.floor(Math.random() * 100);
  const getRandomNumberSecond = () => Math.floor(Math.random() * 100);
  const getRandomOperation = () => {
    const randomOperation = Math.floor(Math.random() * operations.length);
    return operations[randomOperation];
  };
  const randomNumberFist = getRandomNumberFist();
  const randomNumberSecond = getRandomNumberSecond();
  const operation = getRandomOperation();

  const getCorrectAnswer = doMath(
    randomNumberFist,
    randomNumberSecond,
    operation,
  ).toString();
  const question = `${randomNumberFist} ${operation} ${randomNumberSecond}`;

  return [question, getCorrectAnswer];
};

export { gameRules, getQuestionAndCorrectAnswer };
