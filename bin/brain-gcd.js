#!/usr/bin/env node

import readlineSync from "readline-sync";
import { userNameFunc, welcomeFunc } from "../src/cli.js";
import { handleGameResult, checkForVictory } from "../src/gameUtils.js";

console.log(welcomeFunc());
const { gretting, userName } = userNameFunc();
console.log(gretting);
console.log("Find the greatest common divisor of given numbers.");

const getRandomNumber = () => Math.floor(Math.random() * 100);

const generateBothNumber = () => {
  const numberOne = getRandomNumber();
  const isNumberOne = numberOne % 2 === 0;
  const numberTwo = isNumberOne
    ? getRandomNumber() * 2
    : getRandomNumber() * 2 + 1;
  return [numberOne, numberTwo];
};

let correctAnswers = 0;
while (correctAnswers < 3) {
  let [numberOne, numberTwo] = generateBothNumber();
  const userAnswer = readlineSync.question(
    `Question: ${numberOne} ${numberTwo}\nYour answer: `
  );

  if (numberOne > numberTwo) {
    while (numberTwo !== 0) {
      const temp = numberOne % numberTwo;
      numberOne = numberTwo;
      numberTwo = temp;
    }
  } else {
    while (numberOne !== 0) {
      const temp = numberTwo % numberOne;
      numberTwo = numberOne;
      numberOne = temp;
    }
  }

  const gcd = numberOne === 0 ? numberTwo : numberOne;

  correctAnswers = handleGameResult(userAnswer, gcd, userName, correctAnswers);
  if (correctAnswers === 0) break;

  if (checkForVictory(correctAnswers, userName)) break;
}
