function buildBadCharTable(pattern: string): number[] {
    const table: number[] = new Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
        table[pattern.charCodeAt(i)] = i;
    }
    return table;
}

function boyerMooreSearch(text: string, pattern: string): number {
    const badCharTable = buildBadCharTable(pattern);
    const m = pattern.length;
    const n = text.length;
    let s = 0; // shift of the pattern with respect to text

    while (s <= n - m) {
        let j = m - 1;

        // Keep reducing index j of pattern while characters of pattern and text are
        // matching at this shift s
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            return s; // Return the starting index of the pattern
            // Optionally, you can implement another shift for further searches
            // s += (s + m < n) ? m - badCharTable[text.charCodeAt(s + m)] : 1;
        } else {
            // Shift the pattern based on the bad character heuristic
            s += Math.max(1, j - badCharTable[text.charCodeAt(s + j)]);
        }
    }

    return -1; // No match found
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found.");
}
