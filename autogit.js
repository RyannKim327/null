function generateBadCharTable(pattern) {
    const table = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function generateGoodSuffixTable(pattern) {
    const table = new Array(pattern.length).fill(0);
    const goodSuffixes = [];

    // Fill the table with 0 as the default value
    for (let i = 0; i < pattern.length; i++) {
        table[i] = 0;
    }

    let i = pattern.length;
    let j = pattern.length + 1;

    while (i > 0) {
        if (pattern[i - 1] === pattern[j - 1]) {
            i--;
            j--;
            table[i] = j - pattern.length;
        } else {
            j = goodSuffixes[j];
            if (j < i) {
                i = j;
            }
        }
    }

    j = goodSuffixes[0];

    for (i = 0; i < pattern.length; i++) {
        if (table[i] === 0) {
            table[i] = j;
        }

        if (i === j) {
            j = goodSuffixes[j];
        }
    }

    return table;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = generateBadCharTable(pattern);
    const goodSuffixTable = generateGoodSuffixTable(pattern);

    const textLength = text.length;
    const patternLength = pattern.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            return shift; // Pattern found at index shift
        } else {
            const badCharShift = badCharTable[text[shift + j]] || patternLength;
            const goodSuffixShift = goodSuffixTable[j];

            shift += Math.max(badCharShift, goodSuffixShift);
        }
    }

    return -1; // Pattern not found
}

// Example usage:
const text = "ABAAABCD";
const pattern = "ABC";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
