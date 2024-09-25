import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../gameUtils.js';

const description = 'Find the greatest common divisor of given numbers';

const findGcd = (numberOne, numberTwo) => {
  while (numberTwo !== 0) {
    const temp = numberOne % numberTwo;
    numberOne = numberTwo;
    numberTwo = temp;
  }
  return numberOne;
};

const generateQuestionAndAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(findGcd(numberOne, numberTwo));

  return { question, correctAnswer };
};

const startGcdGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};

export default startGcdGame;
