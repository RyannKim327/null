function createBadCharacterTable(pattern: string): number[] {
    const table: number[] = new Array(256).fill(-1); // ASCII size
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
        skip = 0; // Reset skip for this position
        for (let j = patternLength - 1; j >= 0; j--) {
            if (pattern[j] !== text[i + j]) {
                const badCharIndex = text.charCodeAt(i + j);
                skip = Math.max(1, j - badCharTable[badCharIndex]); // Calculate skip
                break; // Break the inner loop on mismatch
            }
            if (j === 0) {
                occurrences.push(i); // Match found
                skip = 1; // Move to the next character in the text
            }
        }
    }

    return occurrences;
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const result = boyerMooreHorspool(text, pattern);
console.log("Pattern found at indices:", result);
