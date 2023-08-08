import readlineSync from 'readline-sync';

const startGame = (gameRules, getRoundData) => {
  const roundCounter = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= roundCounter; i += 1) {
    const [question, getCorrectAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === getCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer}'. \n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
