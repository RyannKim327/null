function preprocessPattern(pattern) {
    const patternLength = pattern.length;
    const badCharTable = {};
    const goodSuffixTable = new Array(patternLength).fill(0);

    // Preprocess bad character table
    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
    }

    // Preprocess good suffix table
    const suffixes = new Array(patternLength).fill(0);
    let lastPrefixPosition = patternLength;

    for (let i = patternLength - 1; i >= 0; i--) {
        if (isPrefix(pattern, i + 1)) {
            lastPrefixPosition = i + 1;
        }

        suffixes[i] = lastPrefixPosition - i + patternLength - 1;
    }

    for (let i = 0; i < patternLength - 1; i++) {
        const suffixLen = suffixes[i];
        goodSuffixTable[suffixLen] = patternLength - 1 - i + suffixLen;
    }

    return { badCharTable, goodSuffixTable };
}

function isPrefix(pattern, p) {
    for (let i = p, j = 0; i < pattern.length; i++, j++) {
        if (pattern[i] !== pattern[j]) {
            return false;
        }
    }
    return true;
}

function boyerMoore(text, pattern) {
    const { badCharTable, goodSuffixTable } = preprocessPattern(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;

    let i = 0;
    while (i <= textLength - patternLength) {
        let j = patternLength - 1;
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found
            return i;
        } else {
            const badCharSkip = badCharTable[text[i + j]] || patternLength;
            const goodSuffixSkip = goodSuffixTable[j];

            i += Math.max(badCharSkip, goodSuffixSkip);
        }
    }

    // Pattern not found
    return -1;
}

// Test the implementation
const text = "ABAAABCD";
const pattern = "ABC";
const index = boyerMoore(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
