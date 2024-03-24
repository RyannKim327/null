function preProcessPattern(pattern) {
    const table = new Array(256).fill(pattern.length);
    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
    }
    return table;
}

function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    const skipTable = preProcessPattern(pattern);

    let i = 0;
    while (i <= textLength - patternLength) {
        let j = patternLength - 1;
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        if (j < 0) {
            return i; // pattern found at index i in the text
        } else {
            i += skipTable[text.charCodeAt(i + patternLength - 1)];
        }
    }
    return -1; // pattern not found in text
}

// Example usage
const text = "exampletextforexamplesearching";
const pattern = "search";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
