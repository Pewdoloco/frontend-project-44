import gameEngine from "../gameEngine.js";
import { getRandomNumber } from "../gameUtils.js";

const description = "What is the result of the expression?";
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

const generateQuestionAndAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const keys = Object.keys(operations);
  const operation = keys[getRandomNumber()];
  const question = `${numberOne} ${operation} ${numberTwo}`;
  const correctAnswer = String(operations[operation](numberOne, numberTwo));
  return { question, correctAnswer };
};

export const startCalcGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};
