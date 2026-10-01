export function createElement(tag, options = {}) {
  const { className, text } = options;
  const el = document.createElement(tag)
  if (className) {

    el.classList.add(className)
  }
  if (text != null) {
    el.textContent = text
  }
  return el

}

export function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

