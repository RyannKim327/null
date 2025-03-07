function createBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Initialize the bad character table
    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0 || textLength < patternLength) {
        return -1; // Pattern not found
    }

    const badCharTable = createBadCharTable(pattern);
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
            // Shift the pattern based on the bad character table
            const badCharShift = badCharTable[text[shift + j]] || patternLength;
            shift += Math.max(1, j - badCharShift);
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
