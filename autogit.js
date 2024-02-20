function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0) {
        return 0;
    }

    const badCharTable = {};
    const lastIndex = patternLength - 1;

    for (let i = 0; i < lastIndex; i++) {
        badCharTable[pattern[i]] = lastIndex - i;
    }

    let skip = 0;

    while (textLength - skip >= patternLength) {
        let i = patternLength - 1;

        while (text[skip + i] === pattern[i]) {
            if (i === 0) {
                return skip;
            }
            i--;
        }

        skip += badCharTable[text[skip + lastIndex]] || patternLength;
    }

    return -1;
}

// Test the function
const text = "AABAACAADAABAABA";
const pattern = "AABA";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
