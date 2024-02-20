function preprocessPattern(pattern) {
    const badChar = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        badChar[pattern[i]] = i;
    }

    return badChar;
}

function boyerMoore(text, pattern) {
    const badChar = preprocessPattern(pattern);
    const n = text.length;
    const m = pattern.length;
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            console.log("Pattern found at index " + i);
            i += (i + m < n) ? m - badChar[text[i + m]] : 1;
        } else {
            i += Math.max(1, j - badChar[text[i + j]]);
        }
    }
}

// Test the algorithm
const text = "ABAAABCD";
const pattern = "ABC";
boyerMoore(text, pattern);
