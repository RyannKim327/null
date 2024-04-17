function buildBadCharTable(pattern) {
    const table = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function buildGoodSuffixTable(pattern) {
    const table = new Array(pattern.length).fill(0);
    let suffix = pattern.length;
    let j = pattern.length - 1;

    for (let i = pattern.length - 2; i >= 0; i--) {
        if (i > j && table[i + pattern.length - 1 - j] < i - j) {
            table[i] = table[i + pattern.length - 1 - j];
        } else {
            j = Math.min(j, i);
            suffix = i;
            while (j >= 0 && pattern[j] == pattern[j + pattern.length - 1 - suffix]) {
                j--;
            }
            table[i] = suffix - j;
        }
    }

    return table;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const goodSuffixTable = buildGoodSuffixTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    let i = patternLength - 1;

    while (i < textLength) {
        let j = patternLength - 1;
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }
        if (j < 0) {
            return i + 1;
        }

        i += Math.max(badCharTable[text[i]] || 0, goodSuffixTable[j]);
    }

    return -1;
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
const index = boyerMooreSearch(text, pattern);
console.log("Pattern found at index:", index);
