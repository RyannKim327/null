function boyerMooreHorspool(text, pattern) {
    // Your code goes here
}
function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    // Generate the bad character shift table
    const shiftTable = generateShiftTable(pattern);

    // Your code goes here
}
function generateShiftTable(pattern) {
    const table = {};

    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern[i]] = pattern.length - 1 - i;
    }

    return table;
}
function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    // Generate the bad character shift table
    const shiftTable = generateShiftTable(pattern);

    let i = 0;
    while (i <= textLength - patternLength) {
        let j = patternLength - 1;

        // Keep reducing the index of the pattern while characters match
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found at index i
            return i;
        } else {
            // Shift based on the bad character rule
            i += shiftTable[text[i + patternLength - 1]] || patternLength;
        }
    }

    // Pattern not found in the text
    return -1;
}
const text = "This is a test string";
const pattern = "test";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at index ${result}`);
