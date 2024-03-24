function bmhSearch(text, pattern) {
    const charTable = {};
    const patternLength = pattern.length;

    // Fill the character table with the shift values
    for (let i = 0; i < patternLength - 1; i++) {
        charTable[pattern[i]] = patternLength - 1 - i;
    }

    let i = patternLength - 1;
    while (i < text.length) {
        let k = 0;
        while (k < patternLength && pattern[patternLength - 1 - k] === text[i - k]) {
            k++;
        }
        if (k === patternLength) {
            return i - patternLength + 1; // Pattern found
        } else {
            i += charTable[text[i]] || patternLength;
        }
    }

    return -1; // Pattern not found
}

// Example usage:
const text = "Hello, this is a sample text for testing the BMH algorithm.";
const pattern = "sample";
const foundIndex = bmhSearch(text, pattern);

if (foundIndex !== -1) {
    console.log(`Pattern found at index ${foundIndex}.`);
} else {
    console.log("Pattern not found in the text.");
}
