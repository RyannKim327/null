function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const table: { [key: string]: number } = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const results: number[] = [];

    let s = 0; // Shift of the pattern with respect to text

    while (s <= textLength - patternLength) {
        let j = patternLength - 1;

        // Keep reducing j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            results.push(s);
            // Shift the pattern so that the next character in text aligns with
            // the last occurrence of pattern in text
            s += (s + patternLength < textLength) ? (patternLength - badCharTable[text[s + patternLength]] || patternLength) : 1;
        } else {
            // Shift the pattern based on the bad character heuristic
            const shift = badCharTable[text[s + j]] || patternLength;
            s += Math.max(1, shift - (patternLength - 1 - j));
        }
    }

    return results;
}

// Example usage
const text = "ababcabcababcabc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log("Pattern found at indices:", result);
