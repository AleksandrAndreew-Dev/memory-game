import { state } from './state.js';
import { updateStats } from './components/stats.js';
import { getModal } from './components/modal.js';
import { handleWin } from './components/win-content.js';
import { cards } from './data.js';
import { buildDeck } from './helpers.js';
import {
  createCard,
  updateCard,
} from './components/card.js';

export function startNewGame() {
  clearTimeout(state.closeTimeoutId);
  state.closeTimeoutId = null;

  state.deck = buildDeck(cards);
  state.moves = 0;
  state.pairs = 0;
  state.firstCard = null;
  state.isLocked = false;

  const board = document.querySelector('.board');
  board.replaceChildren();
  state.deck.forEach((cardData, index) => {
    board.append(createCard(cardData, index));
  });

  updateStats(state);

  getModal().close();
}

export function handleCardClick(e) {
  const cardEl = e.target.closest('.card');
  if (!cardEl) return;
  const index = Number(cardEl.dataset.index);
  const cardData = state.deck[index];
  if (state.pairs === 8) return;
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
  updateStats(state);
  cardData.isOpen = true;
  updateCard(cardEl, cardData);

  const firstIndex = state.firstCard.index;
  const firstEl = document.querySelector(
    `[data-index="${firstIndex}"]`,
  );
  if (cardData.id === state.firstCard.id) {
    state.pairs += 1;
    updateStats(state);
    state.firstCard.isMatched = true;
    state.firstCard.isOpen = true;
    cardData.isMatched = true;
    cardData.isOpen = true;

    updateCard(firstEl, state.firstCard);
    updateCard(cardEl, cardData);

    state.firstCard = null;
    if (state.pairs === 8) {
      const randomCard =
        cards[Math.floor(Math.random() * cards.length)];
      handleWin(getModal(), randomCard, state.moves);
    }
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
