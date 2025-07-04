function buildBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        // Store the last index of each character in the pattern
        badCharTable[pattern[i]] = i;
    }

    return badCharTable;
}

function buildGoodSuffixTable(pattern: string): number[] {
    const patternLength = pattern.length;
    const goodSuffixTable = Array(patternLength).fill(0);
    const lastPrefixPosition = Array(patternLength + 1).fill(-1);

    // Preprocess the pattern for good suffix rule
    for (let i = patternLength - 1; i >= 0; i--) {
        if (isPrefix(pattern, i + 1)) {
            lastPrefixPosition[patternLength - 1 - i] = i + 1;
        }
    }

    for (let i = 0; i < patternLength; i++) {
        const length = patternLength - 1 - i;
        if (lastPrefixPosition[length] === -1) {
            lastPrefixPosition[length] = lastPrefixPosition[length + 1];
        }
        goodSuffixTable[i] = lastPrefixPosition[length];
    }

    return goodSuffixTable;
}

function isPrefix(pattern: string, p: number): boolean {
    for (let i = p, j = 0; i < pattern.length; i++, j++) {
        if (pattern[i] !== pattern[j]) {
            return false;
        }
    }
    return true;
}

function boyerMoore(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharTable(pattern);
    const goodSuffixTable = buildGoodSuffixTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const result: number[] = [];

    let s = 0; // s is the shift of the pattern with respect to text

    while (s <= textLength - patternLength) {
        let j = patternLength - 1;

        // Keep reducing j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // A match is found
        if (j < 0) {
            result.push(s);
            // Shift the pattern to the right based on good suffix rule
            s += (s + patternLength < textLength) ? patternLength - badCharTable[text[s + patternLength]] : 1;
        } else {
            // Shift the pattern based on the bad character rule and good suffix rule
            const badCharShift = badCharTable[text[s + j]] !== undefined ? j - badCharTable[text[s + j]] : j + 1;
            const goodSuffixShift = goodSuffixTable[j];

            s += Math.max(badCharShift, goodSuffixShift);
        }
    }

    return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMoore(text, pattern);
console.log("Pattern found at indices:", result);
