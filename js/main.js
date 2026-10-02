import { cards } from './data.js';
import { state } from './state.js';
import { buildDeck } from './helpers.js';
import { createHeader } from './components/header.js';
import { createBoard } from './components/board.js';
import {
  createStats,
  updateStats,
} from './components/stats.js';
import { getModal } from './components/modal.js';
import { startNewGame, handleCardClick } from './game.js';

state.deck = buildDeck(cards);

const header = createHeader();
const stats = createStats();
const board = createBoard(state.deck);
const modal = getModal();

board.addEventListener('click', handleCardClick);
header.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;

  if (action === 'new-game') {
    startNewGame();
  }
  if (action === 'leaders') {
    return;
  }
});

modal.element.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'close') {
    modal.close();
  }
  if (action === 'new-game') {
    startNewGame();
  }
});

const app = document.createElement('div');
app.classList.add('app');
app.append(header, stats, board, modal.element);

modal.element.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'close') {
    modal.close();
  }
  if (action === 'new-game') {
    modal.close();
  }
});
document.body.append(app);

updateStats(state);
