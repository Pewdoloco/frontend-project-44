#!/usr/bin/env node

import readlineSync from "readline-sync";
import { userNameFunc, welcomeFunc } from "../src/cli.js";

console.log(welcomeFunc());
const { userNameGreeting, gretting, userName } = userNameFunc();
console.log(gretting);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let correctAnswers = 0;
while (correctAnswers < 3) {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? "yes" : "no";

  let userAnswer = readlineSync.question(
    "Question: " + number + "\n" + "Your answer: "
  );

  if (userAnswer === correctAnswer) {
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
