import { cards } from './data.js';
import { state } from './state.js';
import { buildDeck, createElement } from './helpers.js';
import { createHeader } from './components/header.js';
import { createBoard } from './components/board.js';

state.deck = buildDeck(cards);
const header = createHeader();
const board = createBoard(state.deck);

const app = document.createElement('div');
app.classList.add('app');
app.append(header, board);
document.body.append(app);
