#!/usr/bin/env node

import readlineSync from "readline-sync";
import { userNameFunc, welcomeFunc } from "../src/cli.js";

console.log(welcomeFunc());
const { gretting, userName } = userNameFunc();
console.log(gretting);
console.log("What number is missing in the progression?");

const getRandomNumber = () => {
  const progression = [];
  const startNumber = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < 10; i += 1) {
    progression.push(startNumber + i * step);
  }
  return progression;
};

let correctAnswers = 0;
while (correctAnswers < 3) {
  const progression = getRandomNumber();
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  const question = progression.join(" ");
  const userAnswer = readlineSync.question(
    `Question: ${question}\nYour answer: `
  );

  if (Number(userAnswer) === correctAnswer) {
    console.log("Correct!");
    correctAnswers += 1;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${userName}!`);
    correctAnswers = 0;
    break;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}
