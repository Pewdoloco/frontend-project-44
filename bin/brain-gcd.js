#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userNameFunc, welcomeFunc } from '../src/cli.js';

console.log(welcomeFunc());
const { gretting, userName } = userNameFunc();
console.log(gretting);
console.log('Find the greatest common divisor of given numbers.');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

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
    `Question: ${numberOne} ${numberTwo}\nYour answer: `,
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

  const isEven = numberOne === 0 ? numberTwo : numberOne;

  if (Number(userAnswer) === isEven) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    correctAnswers = 0;
    break;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}
