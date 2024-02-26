function createBadMatchTable(pattern) {
    const table = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - i - 1;
    }

    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badMatchTable = createBadMatchTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    
    let i = patternLength - 1;

    while (i < textLength) {
        let j = patternLength - 1;
        let k = i;

        while (j >= 0 && text[k] === pattern[j]) {
            k--;
            j--;
        }

        if (j === -1) {
            return k + 1; // Match found
        } else {
            const badMatchOffset = badMatchTable[text[i]] || patternLength;
            i += badMatchOffset;
        }
    }

    return -1; // No match found
}

// Example Usage
const text = "This is a sample text for searching.";
const pattern = "sample";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
