import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../gameUtils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return { question, correctAnswer };
};

const startEvenGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};

export default startEvenGame;
