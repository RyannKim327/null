function buildBadCharTable(pattern: string): Record<string, number> {
    const badCharTable: Record<string, number> = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        badCharTable[pattern[i]] = i; // Store the last occurrence index of each character
    }

    return badCharTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const positions: number[] = [];

    let shift = 0; // Shift of the pattern with respect to text

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        // Keep reducing j while the characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        // If the pattern has been found
        if (j < 0) {
            positions.push(shift); // Store the index
            // Shift the pattern such that the next character in text aligns with the last occurrence of it in the pattern
            shift += (shift + patternLength < textLength) ? patternLength - badCharTable[text[shift + patternLength]] || patternLength : 1;
        } else {
            // Shift the pattern based on the bad character rule
            const badCharShift = badCharTable[text[shift + j]] || -1;
            shift += Math.max(1, j - badCharShift);
        }
    }
    
    return positions;
}

// Example usage
const text = "ABCAABCDABABCAABCDABCA";
const pattern = "ABCD";
const occurrences = boyerMooreSearch(text, pattern);
console.log("Pattern found at positions:", occurrences);
