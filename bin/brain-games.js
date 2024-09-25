#!/usr/bin/env node
import { userGrettingNameFunc, welcomeFunc } from "../src/cli.js";

const startBrainGames = () => {
  console.log(welcomeFunc());
  console.log(userGrettingNameFunc());
};

startBrainGames();
