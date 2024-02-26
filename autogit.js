function buildBadCharTable(pattern) {
    const table = new Map();
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table.set(pattern[i], patternLength - i - 1);
    }

    return table;
}

function searchBoyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const badCharTable = buildBadCharTable(pattern);
    let i = patternLength - 1;

    while (i < textLength) {
        let j = patternLength - 1;
        
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }

        if (j === -1) {
            return i + 1; // pattern found
        } else {
            i += Math.max(1, badCharTable.get(text[i]) || patternLength);
        }
    }

    return -1; // pattern not found
}

// Example usage
const text = 'Hello, how are you?';
const pattern = 'how';

const index = searchBoyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found');
}
