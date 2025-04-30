function createBadCharTable(pattern: string): number[] {
    const badCharTable = Array(256).fill(pattern.length); // Assume ASCII
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const matches: number[] = [];
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0 || textLength === 0 || patternLength > textLength) {
        return matches;
    }

    const badCharTable = createBadCharTable(pattern);
    let i = 0; // Start from the beginning of the text

    while (i <= textLength - patternLength) {
        let j = patternLength - 1;

        // Start comparing from the end of the pattern
        while (j >= 0 && text.charAt(i + j) === pattern.charAt(j)) {
            j--;
        }

        // If we found a match
        if (j < 0) {
            matches.push(i);
            // Shift the pattern so that the next character in text aligns with the last character of pattern
            i += (i + patternLength < textLength) ? patternLength - badCharTable[text.charCodeAt(i + patternLength)] : 1;
        } else {
            // Shift the pattern based on the bad character table
            i += Math.max(1, j - badCharTable[text.charCodeAt(i + j)]);
        }
    }

    return matches;
}

// Example usage
const text = "ababcababcabcac";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${result.join(", ")}`);
