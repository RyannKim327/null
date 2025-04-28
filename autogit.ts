function buildBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Fill the table with the last index of each character
    for (let i = 0; i < patternLength; i++) {
        // Store the last occurrence of each character
        badCharTable[pattern[i]] = i;
    }

    return badCharTable;
}

function boyerMooreSearch(text: string, pattern: string): number {
    const badCharTable = buildBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;

    let s = 0; // s is the shift of the pattern with respect to text

    while (s <= textLength - patternLength) {
        let j = patternLength - 1;

        // Keep reducing j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return s; // Match found at index s
        } else {
            // Calculate shift based on the bad character heuristic
            const badCharShift = badCharTable[text[s + j]] !== undefined 
                ? Math.max(1, j - badCharTable[text[s + j]]) 
                : j + 1;

            // Shift the pattern to align with the next character
            s += badCharShift;
        }
    }

    return -1; // No match found
}

// Example Usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found");
}
