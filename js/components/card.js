import { createElement } from '../helpers.js';
export function createCard(cardData, index) {
  const card = createElement('article', {
    className: 'card',
  });
  const img = createElement('img');
  img.src = cardData.image;
  img.alt = cardData.name;
  img.classList.add('card__image');
  card.dataset.id = cardData.id;
  card.dataset.index = index;
  card.append(img);
  return card;
}
