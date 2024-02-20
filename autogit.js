function boyerMooreSearch(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;
    if (patternLength === 0) return 0;
    
    // Preprocess pattern
    const rightmost = new Array(256).fill(-1);
    for (let i = 0; i < patternLength; i++) {
        rightmost[pattern.charCodeAt(i)] = i;
    }

    let skip;
    for (let i = 0; i <= textLength - patternLength; i += skip) {
        skip = 0;
        for (let j = patternLength - 1; j >= 0; j--) {
            if (pattern[j] !== text[i + j]) {
                skip = Math.max(1, j - rightmost[text.charCodeAt(i + j)]);
                break;
            }
        }
        if (skip === 0) {
            return i;
        }
    }
    return -1;
}

// Test the Boyer-Moore search function
const text = 'Hello, how are you?';
const pattern = 'you';
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found');
}
