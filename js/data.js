let cards = [];

try {
    const res = await fetch('./data/data.json');
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    cards = await res.json();

} catch (err) {
    console.error('Failed to load cards:', err);
}

export { cards }