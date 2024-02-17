function createBadMatchTable(pattern) {
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
    const badMatchTable = createBadMatchTable(pattern);

    let index = 0;

    while (index <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[index + j]) {
            j--;
        }

        if (j < 0) {
            return index; // Match found
        } else {
            const shift = badMatchTable[text[index + patternLength - 1]] || patternLength;
            index += shift;
        }
    }

    return -1; // Match not found
}

// Example usage
const text = "hello world";
const pattern = "world";
const matchIndex = boyerMooreHorspool(text, pattern);

if (matchIndex !== -1) {
    console.log(`Match found at index ${matchIndex}`);
} else {
    console.log(`Match not found`);
}
