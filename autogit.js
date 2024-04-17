function preProcessPattern(pattern) {
    const table = new Array(256).fill(pattern.length);
    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
    }
    return table;
}

function boyerMooreSearch(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;
    const jumpTable = preProcessPattern(pattern);
    
    let i = patternLength - 1; // Index for pattern
    let j = patternLength - 1; // Index for text

    while (i < textLength) {
        if (pattern[j] === text[i]) {
            if (j === 0) {
                return i; // Match found
            }
            i--;
            j--;
        } else {
            i = i + patternLength - Math.min(j, 1 + jumpTable[text.charCodeAt(i)]);
            j = patternLength - 1;
        }
    }

    return -1; // No match found
}

// Example Usage
const text = "hello world";
const pattern = "world";
const index = boyerMooreSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
