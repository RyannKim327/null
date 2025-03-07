function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const table: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    let i = 0; // index for text

    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // index for pattern

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(i);
            // Shift the pattern to the right
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
console.log(result); // Output: [2, 7, 12]
