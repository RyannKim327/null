function BoyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;

    // Build bad character heuristic
    const badChar = new Array(256).fill(-1);
    for (let i = 0; i < patternLength; i++) {
        badChar[pattern.charCodeAt(i)] = i;
    }

    // Search for the pattern in the text
    let shift = 0;
    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }
        if (j < 0) {
            console.log(`Pattern found at index ${shift}`);
            shift += (shift + patternLength < textLength) ? patternLength - badChar[text.charCodeAt(shift + patternLength)] : 1;
        } else {
            shift += Math.max(1, j - badChar[text.charCodeAt(shift + j)]);
        }
    }
}

// Test the Boyer-Moore algorithm
const text = "ABAAABCD";
const pattern = "ABC";
BoyerMooreSearch(text, pattern);
