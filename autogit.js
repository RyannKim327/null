function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const charTable = new Array(256).fill(patternLength);

    // Populate charTable with values based on the pattern
    for (let i = 0; i < patternLength - 1; i++) {
        charTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    // Perform the search
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
            i += patternLength - j + Math.min(j, charTable[text.charCodeAt(i)]);
            j = patternLength - 1;
        }
    }

    return -1;
}

// Example usage
const text = "hello world";
const pattern = "world";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
