function createBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const m = pattern.length;

    for (let i = 0; i < m; i++) {
        badCharTable[pattern[i]] = i;
    }
    
    return badCharTable;
}

function searchBoyerMoore(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;
    const result: number[] = [];
    
    const badCharTable = createBadCharTable(pattern);

    let s = 0; // Shift of the pattern
    while (s <= n - m) {
        let j = m - 1; // Index of the last character in the pattern

        // Keep reducing j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            result.push(s);
            // Shift the pattern based on the last character of the pattern
            s += (s + m < n) ? m - badCharTable[text[s + m]] || m : 1;
        } else {
            // Shift the pattern based on the bad character table
            s += Math.max(1, j - (badCharTable[text[s + j]] || -1));
        }
    }

    return result;
}

// Example usage:
const text = "ABAAABCDABABCDABCA";
const pattern = "ABABC";
const indices = searchBoyerMoore(text, pattern);
console.log("Pattern found at indices:", indices);
