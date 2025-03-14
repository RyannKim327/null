function createBadCharTable(pattern: string): number[] {
    const badCharTable: number[] = new Array(256).fill(-1);
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        badCharTable[pattern.charCodeAt(i)] = i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(shift);
            // Shift the pattern to the right
            shift += (shift + patternLength < textLength) ? patternLength - badCharTable[text.charCodeAt(shift + patternLength)] : 1;
        } else {
            // Shift the pattern based on the bad character rule
            shift += Math.max(1, j - badCharTable[text.charCodeAt(shift + j)]);
        }
    }

    return occurrences;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${result.join(', ')}`);
