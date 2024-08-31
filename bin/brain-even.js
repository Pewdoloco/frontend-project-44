#!/usr/bin/env node

import readlineSync from "readline-sync";
import { userNameFunc, welcomeFunc } from "../src/cli.js";

const setQuestion = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  let userAnswer = readlineSync.question(
    "Question: " + randomNumber + "\n" + "Your answer: "
  );
  return { randomNumber, userAnswer };
};

console.log(welcomeFunc());
const { userNameGreeting, gretting, userName } = userNameFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no"');

let correctAnswers = 0;
while (correctAnswers < 3) {
  const { randomNumber, userAnswer } = setQuestion();

  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? "yes" : "no";

  if (userAnswer.toLowerCase() === correctAnswer) {
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
