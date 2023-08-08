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


  const randomNumber = getRandomNumberOfProgression(massiv);

  const j = massiv.indexOf(randomNumber);
  if (j !== -1) {
    massiv.splice(j, 1, '..');
  }

  const doString = String(massiv);
  const question = doString.replace(/[,]/g, ' ');

  const getCorrectAnswer = String(randomNumber);

  return [question, getCorrectAnswer];
};

export { gameRules, getQuestionAndProgressionAnswer };
