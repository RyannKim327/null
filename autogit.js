function createBadMatchTable(pattern) {
    const table = {};
    const { length } = pattern;

    for (let i = 0; i < length - 1; i++) {
        table[pattern[i]] = length - i - 1;
    }

    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badMatchTable = createBadMatchTable(pattern);
    const { length: textLength } = text;
    const { length: patternLength } = pattern;

    let i = patternLength - 1;

    while (i < textLength) {
        let j = patternLength - 1;
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }

        if (j === -1) {
            return i + 1; // match found
        }

        if (badMatchTable.hasOwnProperty(text[i])) {
            i += Math.max(badMatchTable[text[i]], patternLength - j);
        } else {
            i += patternLength;
        }
    }

    return -1; // no match found
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "consectetur";

const index = boyerMojsonareHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
