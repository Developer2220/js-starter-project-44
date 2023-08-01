#!/usr/bin/env node
import { gameRules, getQuestionAndCorrectAnswer } from '../src/games/calc.js';
import startGame from '../src/index.js';

startGame(gameRules, getQuestionAndCorrectAnswer);
