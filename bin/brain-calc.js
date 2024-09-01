#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userNameFunc, welcomeFunc } from '../src/cli.js';
import { handleGameResult, checkForVictory } from '../src/gameUtils.js';

console.log(welcomeFunc());
const { gretting, userName } = userNameFunc();
console.log(gretting);
console.log('What is the result of the expression?');

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperation = () => {
  const keys = Object.keys(operations);
  return keys[Math.floor(Math.random() * keys.length)];
};

let correctAnswers = 0;
while (correctAnswers < 3) {
  const randomOperation = getRandomOperation();
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const operation = `${numberOne} ${randomOperation} ${numberTwo}`;
  const result = operations[randomOperation](numberOne, numberTwo);

  const userAnswer = readlineSync.question(
    `Question: ${operation}\nYour answer: `,
  );

  correctAnswers = handleGameResult(
    userAnswer,
    result,
    userName,
    correctAnswers,
  );
  if (correctAnswers === 0) break;

  if (checkForVictory(correctAnswers, userName)) break;
}
