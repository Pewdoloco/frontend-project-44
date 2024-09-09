import gameEngine from "../gameEngine.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no"';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = String(isPrime(number) ? "yes" : "no");
  return { question, correctAnswer };
};

export const startPrimeGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};
