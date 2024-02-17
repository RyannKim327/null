function BoyerMooreHorspool(pattern, text) {
    const charTable = {};
    const patternLength = pattern.length;
    const textLength = text.length;

    // Generate skip table
    for (let i = 0; i < patternLength - 1; i++) {
        charTable[pattern[i]] = patternLength - 1 - i;
    }

    // Searching
    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }
        if (j === -1) {
            // Pattern found
            return i + 1;
        } else {
            i += charTable[text[i]] || patternLength;
        }
    }

    // Pattern not found
    return -1;
}

// Example usage
const text = "Hello, world! This is a sample text.";
const pattern = "world";
const index = BoyerMooreHorspool(pattern, text);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
