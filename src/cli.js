import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export { userName, greeting };
