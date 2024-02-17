function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const skipTable = {};

    // Generate the skip table
    for (let i = 0; i < patternLength - 1; i++) {
        skipTable[pattern[i]] = patternLength - i - 1;
    }

    // Perform the search
    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;
        let k = i;

        while (j >= 0 && text[k] === pattern[j]) {
            k--;
            j--;
        }

        if (j === -1) {
            return k + 1; // Pattern found
        } else {
            i += (skipTable[text[i]] || patternLength) ;
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
