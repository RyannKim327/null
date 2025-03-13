function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const table: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Initialize the table with the length of the pattern
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
    let i = 0; // Index for text
    let j: number; // Index for pattern

    while (i <= textLength - patternLength) {
        j = patternLength - 1;

        // Keep moving j while characters match
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return i; // Pattern found at index i
        } else {
            // Shift the pattern based on the bad character rule
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
