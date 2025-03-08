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
    let i = 0; // Index for text
    let j: number; // Index for pattern

    while (i <= textLength - patternLength) {
        j = patternLength - 1;

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return i; // Return the starting index of the match
        } else {
            // Shift the pattern based on the bad character table
            const badCharShift = badCharTable[text[i + j]] || patternLength;
            i += badCharShift;
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
