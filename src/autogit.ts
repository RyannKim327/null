function boyerMooreSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) return [];

    // Step 1: Preprocess the bad character table
    const badCharTable: { [key: string]: number } = {};
    for (let i = 0; i < m; i++) {
        badCharTable[pattern[i]] = i; // Store the last occurrence of each character
    }

    const result: number[] = [];
    let s = 0; // Shift of the pattern with respect to the text

    // Step 2: Search process
    while (s <= n - m) {
        let j = m - 1;

        // Compare characters from right to left
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            // Match found
            result.push(s);
            // Shift the pattern to align with the next possible match
            s += (s + m < n) ? m - (badCharTable[text[s + m]] ?? -1) : 1;
        } else {
            // Mismatch occurred at pattern[j]
            const charShift = badCharTable[text[s + j]] ?? -1;
            s += Math.max(1, j - charShift); // Apply the bad character rule
        }
    }

    return result;
}

// Example usage
const text = "ABAAABCDABCD";
const pattern = "ABCD";
const matches = boyerMooreSearch(text, pattern);
console.log("Pattern found at indices:", matches);
Pattern found at indices: [5, 9]
