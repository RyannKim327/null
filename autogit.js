function boyerMooreHorspool(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;

    if (patternLength === 0) {
        return 0; // Empty pattern always matches at position 0
    }

    const badCharacterTable = new Array(256).fill(patternLength);
    
    for (let i = 0; i < patternLength - 1; i++) {
        badCharacterTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    let i = patternLength - 1;
    let j = 0;

    while (i < textLength) {
        if (text.charAt(i) === pattern.charAt(j)) {
            if (j === 0) {
                return i; // Match found
            }
            i--;
            j--;
        } else {
            i += Math.max(badCharacterTable[text.charCodeAt(i)], patternLength - 1 - j);
            j = patternLength - 1;
        }
    }

    return -1; // No match found
}

// Test the algorithm
const text = "This is a sample text for testing.";
const pattern = "sample";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at position ${index}`);
} else {
    console.log("Pattern not found");
}
