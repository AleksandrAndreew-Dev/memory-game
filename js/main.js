import { cards } from './data.js';
import { state } from './state.js';
import { buildDeck } from './helpers.js';
import { createHeader } from './components/header.js';
import { createBoard } from './components/board.js';
import { handleCardClick } from './game.js';
import {
  createStats,
  updateStats,
} from './components/stats.js';

const stats = createStats();
updateStats(state);
state.deck = buildDeck(cards);
const header = createHeader();
const board = createBoard(state.deck);
board.addEventListener('click', handleCardClick);

const app = document.createElement('div');
app.classList.add('app');
app.append(header, stats, board);
document.body.append(app);
