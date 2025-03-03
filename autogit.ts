function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const table: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Initialize the table with the length of the pattern
    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    // Fill in the default value for characters not in the pattern
    for (let i = 0; i < 256; i++) {
        const char = String.fromCharCode(i);
        if (!(char in table)) {
            table[char] = patternLength;
        }
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const matches: number[] = [];

    let i = 0; // Index for text

    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // Index for pattern

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            matches.push(i);
            // Shift the pattern to the right
            i += (i + patternLength < textLength) ? patternLength - badCharTable[text[i + patternLength]] : 1;
        } else {
            // Shift the pattern based on the bad character rule
            i += Math.max(1, j - badCharTable[text[i + j]]);
        }
    }

    return matches;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: [2, 7, 12]
