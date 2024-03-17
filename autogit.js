function preprocessPattern(pattern) {
    const badCharTable = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - i - 1;
    }

    return badCharTable;
}

function boyerMooreHorspool(text, pattern) {
    const badCharTable = preprocessPattern(pattern);
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
            return i + 1; // Match found
        } else {
            const shift = badCharTable[text[i]] || patternLength;
            i += shift;
        }
    }

    return -1; // No match found
}

// Example usage
const text = "This is a sample text for searching";
const pattern = "sample";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index:", index);
} else {
    console.log("Pattern not found");
}
