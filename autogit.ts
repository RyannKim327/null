function buildBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Initialize the bad character table
    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const matches: number[] = [];

    let i = 0; // Index for text

    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // Index for pattern

        // Compare the pattern with the text from the end
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            matches.push(i);
            // Shift the pattern to the right
            i += (i + patternLength < textLength) ? patternLength - badCharTable[text[i + patternLength]] || patternLength : 1;
        } else {
            // Shift the pattern based on the bad character rule
            const badCharShift = badCharTable[text[i + j]] || patternLength;
            i += Math.max(1, badCharShift - (patternLength - 1 - j));
        }
    }

    return matches;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${result}`);
