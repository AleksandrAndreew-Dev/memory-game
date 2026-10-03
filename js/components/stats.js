import { createElement } from '../helpers.js';

export function createStats() {
  const stats = createElement('div', {
    className: 'stats',
  });
  const moves = createElement('span', {
    className: 'stats__moves',
    text: 'Moves: 0',
  });
  const pairs = createElement('span', {
    className: 'stats__pairs',
    text: 'Pairs: 0 / 8',
  });
  stats.append(moves, pairs);
  return stats;
}

export function updateStats(state) {
  const statsMovesEl =
    document.querySelector('.stats__moves');
  const statsPairsEl =
    document.querySelector('.stats__pairs');
  if (statsMovesEl)
    statsMovesEl.textContent = `Moves: ${state.moves}`;
  if (statsPairsEl)
    statsPairsEl.textContent = `Pairs: ${state.pairs} / 8`;
}
