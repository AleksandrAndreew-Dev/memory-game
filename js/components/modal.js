import { createElement } from '../helpers.js';

let modal = null;
export function getModal() {
  if (modal) return modal;

  const dialog = createElement('dialog', {
    className: 'modal',
  });
  const dialogContent = createElement('div', {
    className: 'modal__content',
  });
  dialog.append(dialogContent);

  function open(contentNode) {
    dialogContent.replaceChildren(contentNode);
    dialog.showModal();
  }

  function close() {
    dialog.close();
  }

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  modal = { element: dialog, open, close };

  return modal;
}
