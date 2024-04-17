function buildBadCharTable(pattern) {
    const table = {};
    const patternLength = pattern.length;
  
    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const badCharTable = buildBadCharTable(pattern);

    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            return shift; // match found
        } else {
            const badCharShift = badCharTable[text[shift + j]] || patternLength;
            shift += badCharShift;
        }
    }

    return -1; // no match found
}

// Example usage:
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "consectetur";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in the text");
}
