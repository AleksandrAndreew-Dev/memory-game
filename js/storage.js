const STORAGE_KEY = 'memory-game-leaders';
const MAX_RESULTS = 10;

export function getResults() {
  try {
    const results =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!Array.isArray(results)) return [];
    return results.slice(0, MAX_RESULTS);
  } catch (error) {
    console.error('Failed to load results:', error);
    return [];
  }
}

export function saveResult(moves) {
  const results = getResults();

  const newResults = { moves, date: Date.now() };
  results.push(newResults);

  results.sort((a, b) => {
    if (a.moves !== b.moves) return a.moves - b.moves;
    return a.date - b.date;
  });
  const top = results.slice(0, MAX_RESULTS);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(top));
}
