function badCharacterTable(pattern) {
    const table = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badCharTable = badCharacterTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found
            return shift;
        } else {
            // Shift based on the bad character rule
            const badCharShift = badCharTable[text[shift + j]] || patternLength;
            shift += badCharShift;
        }
    }

    // Pattern not found
    return -1;
}

// Example usage
const text = "This is a sample test string";
const pattern = "test";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
