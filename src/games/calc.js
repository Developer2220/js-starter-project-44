import readlineSync from 'readline-sync';
import engine from '../index.js';

const calcGame = () => {
  console.log('What is the result of the expression?');
  const getRandomFistNumber = () => Math.floor(Math.random() * 100);
  const getRandomSecondNumber = () => Math.floor(Math.random() * 100);
  const operations = ['-', '+', '*'];
  const getRandomOperation = () => {
    const randomOperation = Math.floor(Math.random() * (operations.length));
    return operations[randomOperation];
  };
  for (let i = 1; i <= 3; i += 1) {
    const fistNumber = getRandomFistNumber();
    const secondNumber = getRandomSecondNumber();
    const operation = getRandomOperation();
    console.log(`Question: ${fistNumber} ${operation} ${secondNumber}`);
    const doMath = () => {
      let math = 0;
      switch (operation) {
        case '+':
          math = fistNumber + secondNumber;
          break;

        case '-':
          math = fistNumber - secondNumber;
          break;

        case '*':
          math = fistNumber * secondNumber;
          break;

        default:
          throw new Error(`Unknown order state: '${operation}'!`);
      }
      return math;
    };
    const number = doMath(fistNumber, operation, secondNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(number) === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${number}. \n Let's try again, ${name}!`);
      return;
    }
  }
};

export default calcGame;
