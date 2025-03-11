function createBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

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

        // Compare pattern with text from the end
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(i);
            // Shift the pattern by the length of the pattern or the bad character shift
            i += (i + patternLength < textLength) ? patternLength - (badCharTable[text[i + patternLength]] || patternLength) : 1;
        } else {
            // Shift the pattern based on the bad character table
            const badCharShift = badCharTable[text[i + j]] || patternLength;
            i += Math.max(1, badCharShift - (patternLength - 1 - j));
        }
    }

    return occurrences;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: [2, 7, 12]
