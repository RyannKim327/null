function createBadCharacterTable(pattern: string): Record<string, number> {
    const badCharTable: Record<string, number> = {};
    const patternLength = pattern.length;

    // Initialize all characters in the pattern
    for (let i = 0; i < patternLength; i++) {
        badCharTable[pattern[i]] = i; // Store the last occurrence of the character
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    // Set the initial index for the text
    let i = 0;

    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // Start matching from the end of the pattern

        // Compare the pattern with the text
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(i); // Store occurrence index
            // Shift the pattern by the length of the pattern
            i += (i + patternLength < textLength) ? patternLength - (badCharTable[text[i + patternLength]] || -1) : 1;
        } else {
            // Shift the pattern based on the bad character table
            const badCharShift = badCharTable[text[i + j]] || -1;
            i += Math.max(1, j - badCharShift); // Ensure we always shift at least one
        }
    }

    return occurrences;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreHorspool(text, pattern);
console.log("Pattern found at indices:", result);
Pattern found at indices: [10]
