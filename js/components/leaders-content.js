import { createElement, formatDate } from '../helpers.js';

export function createLeadersContent(results) {
  const leaders = createElement('div', {
    className: 'leaders',
  });
  const leadersTitle = createElement('h2', {
    className: 'leaders__title',
    text: 'Leaders',
  });

  const leadersEmpty = createElement('p', {
    className: 'leaders__empty',
    text: 'No results yet',
  });
  const thead = createElement('thead');

  const tbody = createElement('tbody');

  const table = createElement('table', {
    className: 'leaders__table',
  });

  thead.append(createRow(['#', 'Moves', 'Date'], 'th'));
  results.forEach((result, index) => {
    tbody.append(
      createRow([
        index + 1,
        result.moves,
        formatDate(result.date),
      ]),
    );
  });
  table.append(thead, tbody);

  const leadersButton = createElement('button', {
    className: 'leaders__button',
    text: 'Close',
  });
  leadersButton.dataset.action = 'close';

  leaders.append(leadersTitle);
  if (results.length === 0) {
    leaders.append(leadersEmpty);
  } else {
    leaders.append(table);
  }

  leaders.append(leadersButton);
  return leaders;
}

function createRow(cells, tag = 'td') {
  const row = createElement('tr');
  cells.forEach((cellText) => {
    const cell = createElement(tag, {
      text: String(cellText),
    });
    row.append(cell);
  });
  return row;
}
