function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0) {
        return -1;
    }

    const badCharacterTable = new Array(256).fill(patternLength);
    for (let i = 0; i < patternLength - 1; i++) {
        badCharacterTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    let shift = 0;
    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            return shift;
        }

        shift += badCharacterTable[text.charCodeAt(shift + patternLength - 1)];
    }

    return -1;
}

// Example Usage
const text = "The quick brown fox jumped over the lazy dog";
const pattern = "brown";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
