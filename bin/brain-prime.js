#!/usr/bin/env node
import { gameRules, getQuestionAndPrimeAnswer } from '../src/games/prime.js';
import startGame from '../src/index.js';

startGame(gameRules, getQuestionAndPrimeAnswer);
