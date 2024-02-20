function buildBadCharTable(pattern) {
    const table = new Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
        table[pattern.charCodeAt(i)] = i;
    }
    return table;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }
        if (j < 0) {
            return shift; // pattern found
        } else {
            shift += Math.max(1, j - badCharTable[text.charCodeAt(shift + j)]);
        }
    }

    return -1; // pattern not found
}

const text = "THIS IS A TEST TEXT";
const pattern = "TEST";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
