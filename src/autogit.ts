function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Fill the bad character table with default values
    for (let i = 0; i < patternLength; i++) {
        // Store the last occurrence of each character in the pattern
        badCharTable[pattern[i]] = i;
    }

    return badCharTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    const result: number[] = [];

    let shift = 0; // The shift of the pattern with respect to text

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        // Keep reducing j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            result.push(shift); // Found pattern at index 'shift'
            shift += (shift + patternLength < textLength) ? patternLength - badCharTable[text[shift + patternLength]] || patternLength : 1;
        } else {
            // Shift the pattern to align with the next occurrence of the bad character
            const badCharShift = badCharTable[text[shift + j]] || -1;
            shift += Math.max(1, j - badCharShift);
        }
    }

    return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = boyerMooreSearch(text, pattern);

console.log("Pattern found at indices:", matches); // Output indices where pattern found
