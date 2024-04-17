function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0) {
        return -1;
    }

    const lastOccurrence = {};
    for (let i = 0; i < patternLength; i++) {
        lastOccurrence[pattern[i]] = i;
    }

    let i = patternLength - 1;
    let j = patternLength - 1;

    while (i < textLength) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            }
            i--;
            j--;
        } else {
            i += patternLength - Math.min(j, 1 + lastOccurrence[text[i]]);
            j = patternLength - 1;
        }
    }

    return -1;
}

// Test the Boyer-Moore search algorithm
const text = "hello world";
const pattern = "world";
const index = boyerMooreSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
