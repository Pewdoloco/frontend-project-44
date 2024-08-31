#!/usr/bin/env node

import readlineSync from "readline-sync";
import { userNameFunc, welcomeFunc } from "../src/cli.js";

console.log(welcomeFunc());
const { userNameGreeting, gretting, userName } = userNameFunc();
console.log("What is the result of the expression?");

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

const getRandomOperation = () => {
  const keys = Object.keys(operations);
  return keys[Math.floor(Math.random() * keys.length)];
};

let correctAnswers = 0;
while (correctAnswers < 3) {
  const randomOperation = getRandomOperation();
  let numberOne = Math.floor(Math.random() * 100);
  let numberTwo = Math.floor(Math.random() * 100);
  const operation = numberOne + " " + randomOperation + " " + numberTwo;
  const result = operations[randomOperation](numberOne, numberTwo);

  let userAnswer = readlineSync.question(
    "Question: " + operation + "\n" + "Your answer: "
  );

  const isEven = result;

  if (Number(userAnswer) === isEven) {
    console.log("Correct!");
    correctAnswers += 1;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`
    );
    console.log(`Let's try again, ${userName}!`);
    correctAnswers = 0;
    break;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}
