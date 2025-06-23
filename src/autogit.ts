function boyerMooreSearch(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;

    // Edge case: if the pattern is empty or longer than the text
    if (m === 0 || m > n) {
        return -1;
    }

    // Step 1: Build the shift table (bad character rule)
    const shiftTable: Map<string, number> = new Map();
    for (let i = 0; i < m; i++) {
        shiftTable.set(pattern[i], i); // Store the last occurrence of each character
    }

    // Step 2: Perform the search
    let skip = 0; // Number of characters to skip
    while (skip <= n - m) {
        let j = m - 1; // Start comparing from the rightmost character of the pattern

        // Compare characters from right to left
        while (j >= 0 && pattern[j] === text[skip + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found at index `skip`
            return skip;
        } else {
            // Use the shift table to determine how much to shift
            const charInText = text[skip + m - 1]; // The mismatched character in the text
            const shiftValue = shiftTable.get(charInText);
            skip += (shiftValue !== undefined) ? Math.max(1, m - 1 - shiftValue) : m;
        }
    }

    // Pattern not found
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
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
Pattern found at index 17
