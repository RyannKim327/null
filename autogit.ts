function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const table: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0 || textLength < patternLength) {
        return -1; // Pattern not found
    }

    const badCharTable = createBadCharacterTable(pattern);
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return shift; // Return the starting index of the match
        } else {
            // Calculate the shift using the bad character table
            const badCharShift = badCharTable[text[shift + j]] || patternLength;
            shift += badCharShift;
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found");
}
