function boyerMooreHorspool(text: string, pattern: string): number | null {
    const textLength = text.length;
    const patternLength = pattern.length;

    // Edge cases
    if (patternLength === 0) return 0;
    if (textLength < patternLength) return null;

    // Create the bad character shift table
    const badCharShift: { [key: string]: number } = {};
    for (let i = 0; i < patternLength; i++) {
        badCharShift[pattern[i]] = patternLength - i - 1;
    }

    let i = 0; // Start from the beginning of the text
    while (i <= textLength - patternLength) {
        let j = patternLength - 1; // Start from the end of the pattern
        // Keep decreasing j until characters match or j < 0
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        if (j < 0) {
            // Match found, return the position
            return i;
        } else {
            // Shift the pattern based on the bad character rule
            const badChar = text[i + j];
            const shift = badCharShift[badChar] !== undefined ? badCharShift[badChar] : patternLength;
            i += shift;
        }
    }
    // No match found
    return null;
}

// Example usage:
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 2 (index of the first occurrence of "abc")
