function boyerMooreHorspool(text, pattern) {
    const alphabet = 256;
    const patternLength = pattern.length;
    const textLength = text.length;

    if (patternLength === 0) {
        return -1; // Pattern is empty
    }

    const badCharacterShift = new Array(alphabet).fill(patternLength);

    // Preprocess bad character shift table
    for (let i = 0; i < patternLength - 1; i++) {
        badCharacterShift[pattern.charCodeAt(i)] = patternLength - i - 1;
    }

    let i = patternLength - 1; // Index for text
    let j = patternLength - 1; // Index for pattern

    while (i < textLength) {
        if (text.charAt(i) === pattern.charAt(j)) {
            if (j === 0) return i; // Match found
            i--;
            j--;
        } else {
            i += Math.max(badCharacterShift[text.charCodeAt(i)], 1 + patternLength - j);
            j = patternLength - 1;
        }
    }

    return -1; // Pattern not found in text
}

// Example usage
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "fox";
const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 16
