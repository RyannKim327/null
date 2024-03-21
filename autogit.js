function buildBadCharTable(pattern) {
    const badCharTable = new Map();
  
    for (let i = 0; i < pattern.length - 1; i++) {
        badCharTable.set(pattern[i], pattern.length - i - 1);
    }

    return badCharTable;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const n = text.length;
    const m = pattern.length;
  
    let i = m - 1; // Index in text
    let j = m - 1; // Index in pattern
  
    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                // Match found
                return i;
            }
            i--;
            j--;
        } else {
            const badCharShift = badCharTable.has(text[i]) ? badCharTable.get(text[i]) : m;
            i += Math.max(badCharShift, m - j);
            j = m - 1;
        }
    }
  
    return -1; // Pattern not found
}

// Example usage
const text = 'example text for searching';
const pattern = 'search';

const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found');
}
