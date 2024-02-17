function boyerMooreHorspool(text, pattern) {
    const charTable = {};

    const patternLength = pattern.length;
    const textLength = text.length;
    let i = patternLength - 1;

    if (i > textLength - 1) {
        return -1; // pattern is longer than text, no match possible
    }

    for (let j = 0; j < patternLength - 1; j++) {
        const char = pattern[j];
        charTable[char] = patternLength - j - 1;
    }

    while (i <= textLength - 1) {
        let k = 0;
        while (k <= patternLength - 1 && pattern[patternLength - 1 - k] === text[i - k]) {
            k++;
        }

        if (k === patternLength) {
            return i - patternLength + 1; // match found
        } else {
            const char = text[i];
            if (charTable[char]) {
                i += charTable[char];
            } else {
                i += patternLength;
            }
        }
    }

    return -1; // no match found
}

// Usage
const text = "hello world";
const pattern = "world";
const index = boyerMojsonMorreHorspool(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index:", index);
} else {
    console.log("Pattern not found in text.");
}
