import { state } from './state.js';
import { updateCard } from './components/card.js';

export function handleCardClick(e) {
  const cardEl = e.target.closest('.card');
  if (!cardEl) return;
  const index = Number(cardEl.dataset.index);
  const cardData = state.deck[index];

  if (state.isLocked) return;
  if (state.firstCard?.index === cardData.index) return;

  if (cardData.isMatched) return;

  if (cardData.isOpen) return;

  if (state.firstCard == null) {
    openCard(cardEl, cardData);
  } else {
    checkMatch(cardEl, cardData);
  }
}

function openCard(cardEl, cardData) {
  state.firstCard = cardData;
  cardData.isOpen = true;
  updateCard(cardEl, cardData);
}

function checkMatch(cardEl, cardData) {
  state.moves += 1;
  const firstIndex = state.firstCard.index;
  const firstEl = document.querySelector(
    `[data-index="${firstIndex}"]`,
  );
  if (cardData.id === state.firstCard.id) {
    state.pairs += 1;
    state.firstCard.isMatched = true;
    state.firstCard.isOpen = true;
    cardData.isMatched = true;
    cardData.isOpen = true;
    updateCard(firstEl, state.firstCard);
    updateCard(cardEl, cardData);
    state.firstCard = null;
  } else {
    closeCards(firstEl, state.firstCard, cardEl, cardData);
  }
}

function closeCards(
  firstEl,
  firstData,
  secondEl,
  secondData,
) {
  state.isLocked = true;
  state.closeTimeoutId = setTimeout(() => {
    firstData.isOpen = false;
    secondData.isOpen = false;
    updateCard(firstEl, firstData);
    updateCard(secondEl, secondData);
    state.firstCard = null;
    state.isLocked = false;
    state.closeTimeoutId = null;
  }, 1000);
}
