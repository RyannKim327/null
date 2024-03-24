function generateBadCharacterTable(pattern) {
    const table = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - i - 1;
    }

    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badCharTable = generateBadCharacterTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            return shift;  // Match found
        } else {
            const badChar = text[shift + j];
            shift += badCharTable[badChar] || patternLength;
        }
    }

    return -1;  // No match found
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "consectetur";

const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in the text");
}
