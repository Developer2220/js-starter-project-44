import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
    const number = (eval(fistNumber + operation + secondNumber));
    const userAnswer = readlineSync.question('Your answer: ');
    if (number === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${number}. \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
