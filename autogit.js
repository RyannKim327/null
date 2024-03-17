function boyerMooreHorspool(text, pattern) {
    const charTable = {};
    const patternLength = pattern.length;
    const textLength = text.length;
    let skip = 0;
    
    if (patternLength === 0) return 0;

    // Preprocessing step: Create a bad character table
    for (let i = 0; i < patternLength - 1; i++) {
        charTable[pattern[i]] = patternLength - 1 - i;
    }

    // Boyer-Moore-Horspool algorithm
    let i = 0;
    while (i <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            return i; // Match found
        } else {
            skip = Math.max(1, charTable[text[i + j]] || patternLength);
            i += skip;
        }
    }

    return -1; // No match found
}

// Example usage
const text = "hello world";
const pattern = "world";
const index = boyerMofindMostCommonElement(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in the text");
}
