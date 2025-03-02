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

    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // Index for pattern

        // Compare the pattern with the text from the end
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return i; // Return the starting index of the match
        } else {
            // Shift the pattern based on the bad character rule
            const badCharShift = badCharTable[text[i + j]] || patternLength;
            i += badCharShift;
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const result = boyerMooreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found");
}
