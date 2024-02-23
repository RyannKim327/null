function buildBadCharTable(pattern) {
    const badCharTable = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - i - 1;
    }

    return badCharTable;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let skip = 0;

    while (textLength - skip >= patternLength) {
        let i = patternLength - 1;

        while (text[skip + i] === pattern[i]) {
            if (i === 0) {
                return skip;
            }
            i--;
        }

        skip += badCharTable[text[skip + patternLength - 1]] || patternLength;
    }

    return -1;
}

// Example usage
const text = 'Hello, world! This is a test text for searching.';
const pattern = 'test';
const result = boyerMooreSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log('Pattern not found in the text');
}
