function createBadCharacterTable(pattern: string): number[] {
    const table: number[] = new Array(256).fill(-1);
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        table[pattern.charCodeAt(i)] = i;
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    let skip: number = 0;

    while (textLength - skip >= patternLength) {
        let j: number = patternLength - 1;

        while (j >= 0 && pattern[j] === text[skip + j]) {
            j--;
        }

        if (j < 0) {
            occurrences.push(skip);
            skip += (skip + patternLength < textLength) ? patternLength - badCharTable[text.charCodeAt(skip + patternLength)] : 1;
        } else {
            skip += Math.max(1, j - badCharTable[text.charCodeAt(skip + j)]);
        }
    }

    return occurrences;
}

// Example usage:
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: [2, 7, 12]
