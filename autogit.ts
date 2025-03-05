function buildBadCharacterTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
    }
    
    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0 || textLength < patternLength) {
        return -1; // Pattern not found
    }

    const badCharTable = buildBadCharacterTable(pattern);
    let offset = 0;

    while (offset <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[offset + j]) {
            j--;
        }

        if (j < 0) {
            return offset; // Pattern found at index offset
        } else {
            const badCharShift = badCharTable[text[offset + j]] || patternLength;
            offset += Math.max(1, j - badCharShift);
        }
    }

    return -1; // Pattern not found
}

// Usage example:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
