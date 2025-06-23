function boyerMooreSearch(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;

    // Edge case: if the pattern is empty or longer than the text
    if (m === 0 || m > n) return -1;

    // Step 1: Build the bad character shift table
    const badCharShift: { [key: string]: number } = {};
    for (let i = 0; i < m; i++) {
        badCharShift[pattern[i]] = i; // Record the last occurrence of each character
    }

    // Step 2: Perform the search
    let s = 0; // Shift of the pattern with respect to the text
    while (s <= n - m) {
        let j = m - 1; // Start comparing from the end of the pattern

        // Compare the pattern with the text
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--; // Move leftward
        }

        if (j < 0) {
            // Pattern found at index `s`
            return s;
        } else {
            // Use the bad character rule to calculate the shift
            const charInText = text[s + j];
            const shift = badCharShift[charInText] !== undefined ? j - badCharShift[charInText] : j + 1;
            s += shift;
        }
    }

    // Pattern not found
    return -1;
}

// Example usage
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
const result = boyerMooreSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found");
}
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
Pattern found at index: 17
Pattern not found
