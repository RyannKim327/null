function createBadCharacterTable(pattern: string): number[] {
    const table: number[] = new Array(256).fill(-1); // ASCII character set
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        table[pattern.charCodeAt(i)] = i; // Store the last occurrence of each character
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    let skip: number = 0;

    for (let i = 0; i <= textLength - patternLength; i += skip) {
        skip = 0;

        for (let j = patternLength - 1; j >= 0; j--) {
            if (pattern[j] !== text[i + j]) {
                const badCharIndex = text.charCodeAt(i + j);
                skip = Math.max(1, j - badCharTable[badCharIndex]);
                break;
            }
            if (j === 0) {
                occurrences.push(i); // Match found
            }
        }
    }

    return occurrences;
}

// Example usage:
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log("Pattern found at indices:", result);
