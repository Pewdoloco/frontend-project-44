import gameEngine from "../gameEngine.js";

const description = "What is the result of the expression?";
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperation = () => {
  const keys = Object.keys(operations);
  return keys[Math.floor(Math.random() * keys.length)];
};

const generateQuestionAndAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const operation = getRandomOperation();
  const question = `${numberOne} ${operation} ${numberTwo}`;
  const correctAnswer = String(operations[operation](numberOne, numberTwo));
  return { question, correctAnswer };
};

export const startCalcGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};
