function boyerMooreSearch(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) return 0; // Edge case: empty pattern matches at index 0
    if (m > n) return -1; // Pattern longer than text cannot match

    // Step 1: Build the Bad Character Table
    const badCharTable: { [key: string]: number } = {};
    for (let i = 0; i < m - 1; i++) {
        badCharTable[pattern[i]] = m - 1 - i;
    }

    // Step 2: Perform the search
    let s = 0; // Shift of the pattern with respect to the text
    while (s <= n - m) {
        let j = m - 1;

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            // Match found
            return s;
        } else {
            // Mismatch occurred at pattern[j]
            const badCharShift = badCharTable[text[s + j]] ?? m; // Default shift is the length of the pattern
            s += Math.max(1, badCharShift - (m - 1 - j));
        }
    }

    // No match found
    return -1;
}

// Example usage:
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
const result = boyerMooreSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found");
}
