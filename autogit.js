function createBadCharTable(pattern) {
    const table = {};
    const len = pattern.length;

    for (let i = 0; i < len - 1; i++) {
        table[pattern[i]] = len - i - 1;
    }

    return table;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = createBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    let i = patternLength - 1;
    
    while (i < textLength) {
        let j = patternLength - 1;
        
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }

        if (j === -1) {
            return i + 1;
        } else {
            i += Math.max(badCharTable[text[i]] || 1, patternLength - j);
        }
    }

    return -1;
}

// Test the implementation
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "fox";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
