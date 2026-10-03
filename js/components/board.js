import { createCard } from './card.js';
import { createElement } from '../helpers.js';

export function createBoard(deck) {
  const board = createElement('main', {
    className: 'board',
  });
  deck.forEach((card, index) => {
    board.append(createCard(card, index));
  });
  return board;
}
