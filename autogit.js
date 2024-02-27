function buildBadCharTable(pattern) {
    const table = {};
    const patternLength = pattern.length;
    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }
    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;

    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;

        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }

        if (j === -1) {
            return i + 1; // match found
        } else {
            i += Math.max(badCharTable[text[i]] || 0, 1);
        }
    }

    return -1; // no match found
}

// Example usage:
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "consectetur";

const result = boyerMooreHorspool(text, pattern);
if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found");
}
