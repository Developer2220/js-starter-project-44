#!/usr/bin/env node
import { gameRules, getQuestionAndNodAnswer } from '../src/games/gcd.js';
import startGame from '../src/index.js';

startGame(gameRules, getQuestionAndNodAnswer);
