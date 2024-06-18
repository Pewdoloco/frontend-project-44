import readlineSync from 'readline-sync';

const userNameFunc = () => {
  let userName = readlineSync.question('May I have your name? ');
  return 'Hello, ' + userName + '!';
};

export { userNameFunc };
