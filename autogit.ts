function buildBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        badCharTable[pattern[i]] = i;
    }

    return badCharTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const matches: number[] = [];
    const textLength = text.length;
    const patternLength = pattern.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            matches.push(shift);
            shift += (shift + patternLength < textLength) 
                ? patternLength - badCharTable[text[shift + patternLength]] || patternLength 
                : 1;
        } else {
            shift += Math.max(1, j - (badCharTable[text[shift + j]] || -1));
        }
    }

    return matches;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreSearch(text, pattern);

console.log("Pattern found at positions: ", result);
