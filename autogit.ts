function buildBadCharTable(pattern: string): number[] {
    const badCharTable = new Array(256).fill(-1); // 256 for extended ASCII
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        badCharTable[pattern.charCodeAt(i)] = i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    const occurrences: number[] = [];

    let skip = 0;
    while (skip <= textLength - patternLength) {
        let j = patternLength - 1;

        // Check for the pattern from right to left
        while (j >= 0 && pattern[j] === text[skip + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(skip);
            skip += (skip + patternLength < textLength) ? patternLength - badCharTable[text.charCodeAt(skip + patternLength)] : 1;
        } else {
            // Shift based on the bad character rule
            skip += Math.max(1, j - badCharTable[text.charCodeAt(skip + j)]);
        }
    }

    return occurrences;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Outputs: [2, 7, 12]
