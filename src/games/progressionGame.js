import gameEngine from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const getRandomProgression = (startNumber, step) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(startNumber + i * step);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const startNumber = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = getRandomProgression(startNumber, step);
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const startProgressionGame = () => {
  gameEngine(description, generateQuestionAndAnswer);
};

export default startProgressionGame;
