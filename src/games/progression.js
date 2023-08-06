const gameRules = 'What number is missing in the progression?';

const getQuestionAndProgressionAnswer = () => {
  const getProgression = () => {
    const getRandomNumberFirst = () => Math.floor(Math.random() * 100);
    const getRandomNumberDifference = () => Math.floor(Math.random() * 5);
    let x = getRandomNumberFirst();
    const y = getRandomNumberDifference();
    const arr = [];
    for (let i = 0; i <= 10; i += 1) {
      x += y;
      arr.push(x);
    }
    return arr;
  };

  const massiv = getProgression();

  const getRandomNumberOfProgression = (num) => {
    const rand = Math.floor(Math.random() * num.length);
    return num[rand];
  };

  const getCorrectAnswer = String(getRandomNumberOfProgression(massiv));

  for (let i = 0; i < massiv.length; i += 1) {
    if (String(massiv[i]) === getCorrectAnswer) {
      massiv[i] = '..';
    }
  }
  const doString = String(massiv);
  const question = doString.replace(/[,]/g, ' ');

  return [question, getCorrectAnswer];
};

export { gameRules, getQuestionAndProgressionAnswer };
