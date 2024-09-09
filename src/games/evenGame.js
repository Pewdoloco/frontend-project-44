import gameEngine from "../gameEngine.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? "yes" : "no";
  const question = String(randomNumber);
  return { question, correctAnswer };
};

export const startEvenGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};
