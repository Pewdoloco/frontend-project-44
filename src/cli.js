import readlineSync from 'readline-sync';

const userNameFunc = () => {
  let userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}! \nAnswer "yes" if the number is even, otherwise answer "no"`;
};

export {userNameFunc};
