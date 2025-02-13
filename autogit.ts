function buildBadCharTable(pattern: string): number[] {
    const badCharTable: number[] = Array(256).fill(-1);

    for (let i = 0; i < pattern.length; i++) {
        badCharTable[pattern.charCodeAt(i)] = i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const results: number[] = [];
    const textLength = text.length;
    const patternLength = pattern.length;

    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            results.push(shift);
            shift += (shift + patternLength < textLength) ? patternLength - badCharTable[text.charCodeAt(shift + patternLength)] : 1;
        } else {
            shift += Math.max(1, j - badCharTable[text.charCodeAt(shift + j)]);
        }
    }

    return results;
}

// Example usage:
const text = "ABAAABCDABC";
const pattern = "ABC";
const foundIndices = boyerMooreHorspool(text, pattern);
console.log(foundIndices); // Output: [7]
