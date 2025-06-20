function boyerMooreHorspoolSearch(text: string, pattern: string): number {
    const n = text.length; // Length of the text
    const m = pattern.length; // Length of the pattern

    if (m === 0) return 0; // Edge case: empty pattern matches at index 0
    if (m > n) return -1; // Edge case: pattern longer than text

    // Step 1: Build the bad character shift table
    const badCharShift: { [key: string]: number } = {};
    for (let i = 0; i < m - 1; i++) {
        badCharShift[pattern[i]] = m - 1 - i;
    }

    // Default shift for characters not in the pattern
    const defaultShift = m;

    // Step 2: Perform the search
    let i = 0; // Index in the text
    while (i <= n - m) {
        let j = m - 1; // Start comparing from the end of the pattern

        // Compare characters from right to left
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found at index i
            return i;
        } else {
            // Shift the pattern based on the bad character table
            const shift = badCharShift[text[i + m - 1]] ?? defaultShift;
            i += shift;
        }
    }

    // Pattern not found
    return -1;
}

// Example usage
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
const result = boyerMooreHorspoolSearch(text, pattern);
console.log(`Pattern found at index: ${result}`);
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
Pattern found at index: 17
