function buildBadMatchTable(pattern: string): Record<string, number> {
    const badMatchTable: Record<string, number> = {};
    const patternLength = pattern.length;

    // Initialize the table with the length of the pattern
    for (let i = 0; i < patternLength - 1; i++) {
        badMatchTable[pattern[i]] = patternLength - 1 - i;
    }

    // Fill in characters not in the pattern with the pattern length
    for (let i = 0; i < 256; i++) {
        const char = String.fromCharCode(i);
        if (!(char in badMatchTable)) {
            badMatchTable[char] = patternLength;
        }
    }

    return badMatchTable;
}


function boyerMooreHorspool(text: string, pattern: string): number {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0) return -1;
    if (textLength === 0 || patternLength > textLength) return -1;

    const badMatchTable = buildBadMatchTable(pattern);
    let skip = 0;

    while (skip <= textLength - patternLength) {
        let j = patternLength - 1;

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[skip + j]) {
            j--;
        }

        // If we found a match, return the position
        if (j < 0) {
            return skip; // Match found at index 'skip'
        } else {
            // Shift the pattern based on the bad character
            skip += badMatchTable[text[skip + j]] ?? patternLength;
        }
    }

    return -1; // No match found
}

// Example usage:
const text = "ababcabcabababcdabc";
const pattern = "ababd";
const result = boyerMooreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found.");
}
