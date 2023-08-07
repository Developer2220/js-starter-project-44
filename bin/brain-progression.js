#!/usr/bin/env node
import { gameRules, getQuestionAndProgressionAnswer } from '../src/games/progression.js';
import startGame from '../src/index.js';

startGame(gameRules, getQuestionAndProgressionAnswer);
