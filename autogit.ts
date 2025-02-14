function buildBadCharacterTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        // Store the last index of each character in the pattern
        badCharTable[pattern[i]] = i;
    }
    
    return badCharTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const matches: number[] = [];
    const badCharTable = buildBadCharacterTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let skip = 0;

    while (skip <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[skip + j]) {
            j--;
        }

        if (j < 0) {
            matches.push(skip); // Match found
            skip += (skip + patternLength < textLength) ? patternLength - badCharTable[text[skip + patternLength]] || 1 : 1;
        } else {
            skip += Math.max(1, j - (badCharTable[text[skip + j]] || -1));
        }
    }

    return matches;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreSearch(text, pattern);
console.log("Pattern found at indices:", result);
