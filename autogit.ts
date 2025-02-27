function buildBadCharTable(pattern: string): number[] {
    const badCharTable: number[] = new Array(256).fill(-1);
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        badCharTable[pattern.charCodeAt(i)] = i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const matches: number[] = [];

    let skip = 0;
    while (skip <= textLength - patternLength) {
        let j = patternLength - 1;

        // Compare pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[skip + j]) {
            j--;
        }

        // If we found a match
        if (j < 0) {
            matches.push(skip);
            skip += (skip + patternLength < textLength) ? patternLength - badCharTable[text.charCodeAt(skip + patternLength)] : 1;
        } else {
            // Shift the pattern based on the bad character heuristic
            skip += Math.max(1, j - badCharTable[text.charCodeAt(skip + j)]);
        }
    }

    return matches;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${result}`);
