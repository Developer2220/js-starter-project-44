#!/usr/bin/env node
import { gameRules, evenGame } from '../src/games/even.js';
import startGame from '../src/index.js';

startGame(gameRules, evenGame);
