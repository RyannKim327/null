function boyerMooreHorspool(text: string, pattern: string): number {
    const m = pattern.length;
    const n = text.length;

    if (m === 0) return 0; // empty pattern matches at index 0
    if (m > n) return -1;  // pattern longer than text can't match

    // Preprocessing: Build the bad character shift table
    const skipTable = new Map<string, number>();

    for (let i = 0; i < m - 1; i++) {
        skipTable.set(pattern[i], m - 1 - i);
    }

    const defaultSkip = m; // If character not in pattern, skip whole pattern length

    let i = 0;
    while (i <= n - m) {
        let j = m - 1;

        // Compare pattern from right to left with substring in text
        while (j >= 0 && text[i + j] === pattern[j]) {
            j--;
        }

        if (j < 0) {
            // Match found at index i
            return i;
        } else {
            // Get skip value for text[i + m - 1] or default
            const skip = skipTable.get(text[i + m - 1]) ?? defaultSkip;
            i += skip;
        }
    }

    // No match found
    return -1;
}

// Example usage:
const text = "Here is a simple example";
const pattern = "example";
const index = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at index: ${index}`);
