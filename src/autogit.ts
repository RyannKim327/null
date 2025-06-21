function boyerMooreSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) return [];

    // Step 1: Preprocess the bad character shift table
    const badCharShift: { [key: string]: number } = {};
    for (let i = 0; i < m - 1; i++) {
        badCharShift[pattern[i]] = m - 1 - i;
    }

    // Step 2: Search for the pattern in the text
    const result: number[] = [];
    let i = 0; // Index in the text

    while (i <= n - m) {
        let j = m - 1; // Start comparing from the end of the pattern

        // Compare characters from the end of the pattern
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Match found
            result.push(i);
            // Shift the pattern to align with the next possible match
            i += badCharShift[text[i + m]] ?? m;
        } else {
            // Mismatch occurred at pattern[j]
            const shift = badCharShift[text[i + j]] ?? m;
            i += Math.max(1, shift - (m - 1 - j));
        }
    }

    return result;
}

// Example usage
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
const matches = boyerMooreSearch(text, pattern);

console.log("Pattern found at indices:", matches);
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
Pattern found at indices: [17]
