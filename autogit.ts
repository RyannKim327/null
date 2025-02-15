function createBadCharTable(pattern: string): Record<string, number> {
    const badCharTable: Record<string, number> = {};
    const patternLength = pattern.length;

    // Initialize the bad character table
    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    let i = 0; // Index for text

    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // Index for pattern

        // Compare the pattern with the text
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // A match is found
            occurrences.push(i);
            // Shift according to the last character of the pattern
            i += (i + patternLength < textLength) ? patternLength - badCharTable[text[i + patternLength]] || patternLength : 1;
        } else {
            // Shift the index according to the bad character rule
            const shift = badCharTable[text[i + j]] || patternLength;
            i += shift;
        }
    }

    return occurrences;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABAB";
const result = boyerMooreHorspool(text, pattern);
console.log("Pattern found at indices:", result);
