function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0) return -1;

    // Build bad character skip table
    const badCharSkip = {};
    for (let i = 0; i < patternLength - 1; i++) {
        badCharSkip[pattern[i]] = patternLength - i - 1;
    }

    // Boyer-Moore-Horspool search
    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }
        if (j < 0) {
            return i + 1; // Match found
        } else {
            const skip = badCharSkip[text[i]] || patternLength;
            i += skip;
        }
    }

    return -1; // No match found
}

// Test the algorithm
const text = "hello world, how are you?";
const pattern = "world";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index} in the text.`);
} else {
    console.log(`Pattern not found in the text.`);
}
