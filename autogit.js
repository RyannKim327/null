function createBadMatchTable(pattern) {
    const table = new Map();
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table.set(pattern[i], patternLength - 1 - i);
    }

    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badMatchTable = createBadMatchTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let index = 0;

    while (index <= textLength - patternLength) {
        let k = 0;
        while (k < patternLength && pattern[patternLength - 1 - k] === text[index + patternLength - 1 - k]) {
            k++;
        }

        if (k === patternLength) {
            return index;
        } else {
            const badMatchChar = text[index + patternLength - 1];
            const jump = badMatchTable.get(badMatchChar) || patternLength;
            index += jump;
        }
    }

    return -1;
}

// Test the implementation
const text = "this is a test";
const pattern = "test";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
