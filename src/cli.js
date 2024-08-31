import readlineSync from "readline-sync";

const welcomeFunc = () => {
  return "Welcome to the Brain Games!";
};

const userNameFunc = () => {
  let userNameGreeting = readlineSync.question("May I have your name? ");
  let gretting = `Hello, ${userNameGreeting}!`;
  const userName = gretting.split(" ")[1].slice(0, -1);
  return { gretting, userName };
};

const userGrettingNameFunc = () => {
  let userNameGreeting = readlineSync.question("May I have your name? ");
  return `Hello, ${userNameGreeting}!`;
};

export { userNameFunc, welcomeFunc, userGrettingNameFunc };
