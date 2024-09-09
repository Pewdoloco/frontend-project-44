import readlineSync from "readline-sync";

const gameEngine = (description, generateQuestionAndAnswer) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(description);

  let correctAnswers = 0;
  const roundsToWin = 3;

  while (correctAnswers < roundsToWin) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
