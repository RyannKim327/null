function createBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
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

        // Compare the pattern with the text from the end
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(i);
            // Shift the pattern by one position
            i += (i + patternLength < textLength) ? patternLength - badCharTable[text[i + patternLength]] || 1 : 1;
        } else {
            // Shift the pattern based on the bad character rule
            const shift = badCharTable[text[i + j]] || patternLength;
            i += shift;
        }
    }

    return occurrences;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${result.join(', ')}`);
