function preprocessPattern(pattern) {
    const table = {};
    const patternLength = pattern.length;
    
    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - i - 1;
    }
    
    return table;
}

function boyerMooreSearch(text, pattern) {
    const table = preprocessPattern(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let i = patternLength - 1;
    let j = patternLength - 1;

    while (i < textLength) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            }
            i--;
            j--;
        } else {
            if (table.hasOwnProperty(text[i])) {
                i += Math.max(table[text[i]], patternLength - j);
            } else {
                i += patternLength;
            }
            j = patternLength - 1;
        }
    }
    
    return -1;
}

// Example usage
const text = 'This is an example text for searching';
const pattern = 'example';
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found');
}
