import readlineSync from 'readline-sync';

const welcomeFunc = () => 'Welcome to the Brain Games!';

const userGrettingNameFunc = () => {
  const userNameGreeting = readlineSync.question('May I have your name? ');
  return `Hello, ${userNameGreeting}!`;
};

export { welcomeFunc, userGrettingNameFunc };
