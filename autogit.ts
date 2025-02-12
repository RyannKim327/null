function preprocessBadCharacter(pattern: string): Map<string, number> {
    const badCharTable = new Map<string, number>();

    // Populate the bad character table with default shifts
    for (let i = 0; i < pattern.length; i++) {
        badCharTable.set(pattern[i], i);
    }

    return badCharTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = preprocessBadCharacter(pattern);
    const m = pattern.length;
    const n = text.length;
    const occurrences: number[] = [];

    let s = 0; // s is the shift of the pattern with respect to text
    while (s <= n - m) {
        let j = m - 1; // index for pattern

        // Keep reducing index j of pattern while characters of pattern and text are
        // matching at this shift s
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // A match found
        if (j < 0) {
            occurrences.push(s);
            // Shift the pattern to the right by m, or by the first occurrence of the
            // bad character in the pattern if found
            s += (s + m < n) ? m - (badCharTable.get(text[s + m]) || -1) : 1;
        } else {
            // Shift the pattern so that the bad character in text aligns with
            // the last occurrence of it in the pattern
            s += Math.max(1, j - (badCharTable.get(text[s + j]) || -1));
        }
    }

    return occurrences;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreSearch(text, pattern);
console.log("Pattern found at indices:", result);
