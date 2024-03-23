function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const skipTable = new Array(256).fill(patternLength);
    
    // Preprocess skip_table
    for (let i = 0; i < patternLength - 1; i++) {
        skipTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;
        let k = i;
        while (j >= 0 && text[k] === pattern[j]) {
            j--;
            k--;
        }
        if (j < 0) {
            return k + 1; // Pattern found
        }
        i += skipTable[text.charCodeAt(i)];
    }

    return -1; // Pattern not found
}

// Test the function
const text = "ABAABABACDBABABCABABCABAB";
const pattern = "ABABCABAB";
const index = boyerMooreSearch(text, pattern);
console.log("Pattern found at index:", index);
