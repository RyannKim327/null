function createBadCharacterTable(pattern: string): { [char: string]: number } {
    const table: { [char: string]: number } = {};
    const patternLength = pattern.length;

    // Initialize the table with pattern length
    for (let i = 0; i < 256; i++) {
        table[String.fromCharCode(i)] = patternLength;
    }

    // Update the table with the actual distances
    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0 || textLength < patternLength) {
        return -1; // Pattern not found
    }

    const badCharTable = createBadCharacterTable(pattern);
    let index = 0;

    while (index <= textLength - patternLength) {
        let j = patternLength - 1;

        // Start comparing from the end of the pattern
        while (j >= 0 && text[index + j] === pattern[j]) {
            j--;
        }

        // If j is less than zero, it means the pattern was found
        if (j < 0) {
            return index; // Return the starting index of the found pattern
        } else {
            // Shift the pattern based on the last character mismatched
            const shift = badCharTable[text[index + j]];
            index += shift; // Move the index based on the bad character table
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found.");
}
