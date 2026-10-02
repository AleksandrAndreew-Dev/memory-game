import { createElement } from '../helpers.js';

export function createWinContent(card, moves) {
  const winContainer = createElement('div', {
    className: 'win',
  });
  const h2 = createElement('h2', {
    className: 'win__title',
    text: 'You win!',
  });
  const img = createElement('img');
  img.src = card.image;
  img.alt = card.name;
  const winName = createElement('h3', {
    className: 'win__name',
    text: card.name,
  });
  const quote = createElement('p', {
    className: 'win__quote',
    text: card.quote,
  });
  const movesWin = createElement('span', {
    className: 'win__moves',
    text: `Moves: ${moves}`,
  });

  const newGameBtn = createElement('button', {
    className: 'win__button',
    text: 'New game',
  });

  newGameBtn.dataset.action = 'new-game';
  const closeBtn = createElement('button', {
    className: 'win__button',
    text: 'Close',
  });
  closeBtn.classList.add('win__button--close');
  closeBtn.dataset.action = 'close';

  winContainer.append(
    h2,
    img,
    winName,
    quote,
    movesWin,
    newGameBtn,
    closeBtn,
  );
  return winContainer;
}

export function handleWin(modal, card, moves) {
  const content = createWinContent(card, moves);
  modal.open(content);
}
