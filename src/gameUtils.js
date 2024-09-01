const handleGameResult = (
  userAnswer,
  correctAnswer,
  userName,
  correctAnswers,
) => {
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return correctAnswers + 1;
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${userName}!`);
  return 0;
};

const checkForVictory = (correctAnswers, userName) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  return false;
};

export { handleGameResult, checkForVictory };
