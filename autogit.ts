function createBadCharTable(pattern: string): { [char: string]: number } {
    const badCharTable: { [char: string]: number } = {};
    const patternLength = pattern.length;

    // Initialize the table with default shift values
    for (let i = 0; i < 256; i++) {
        badCharTable[String.fromCharCode(i)] = patternLength;
    }

    // Fill the table with the last occurrence of each character in the pattern
    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;

    if (m === 0 || n < m) return -1; // Edge case handling

    const badCharTable = createBadCharTable(pattern);
    let s = 0; // s is the shift of the pattern with respect to text

    while (s <= n - m) {
        let j = m - 1;

        // Keep moving j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return s; // Return the starting index of the pattern

            // Shift the pattern based on bad character table
        } else {
            s += badCharTable[text[s + j]] || m;
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const index = boyerMooreHorspool(text, pattern);

console.log(`Pattern found at index: ${index}`);
