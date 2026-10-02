import { createElement } from '../helpers.js';

export function createHeader() {
  const header = createElement('header', {
    className: 'header',
  });

  const headerTitle = createElement('h1', {
    className: 'header__title',
    text: 'Memory Game',
  });

  const logo = createElement('img', {
    className: 'header__logo',
  });
  logo.src = './assets/images/logo/logo-1.png';
  logo.alt = 'Star Wars logo';
  headerTitle.prepend(logo);

  const headerActions = createElement('div', {
    className: 'header__actions',
  });
  const newGameBtn = createElement('button', {
    className: 'button',
    text: 'New game',
  });
  newGameBtn.dataset.action = 'new-game';

  const leadersBtn = createElement('button', {
    className: 'button',
    text: 'Leaders',
  });
  leadersBtn.dataset.action = 'leaders';
  headerActions.append(newGameBtn, leadersBtn);
  header.append(headerTitle, headerActions);
  return header;
}
