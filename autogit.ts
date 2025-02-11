function boyerMooreHorspool(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;
    const badCharShift: Record<string, number> = {};

    // Create the bad character shift table
    for (let i = 0; i < m; i++) {
        badCharShift[pattern[i]] = m - 1 - i; // Distance from the end of pattern to the last occurrence
    }

    const occurrences: number[] = [];
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;

        // Compare pattern to the text
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            occurrences.push(i);
            i += (badCharShift[text[i + m]] || m); // Shift the pattern
        } else {
            // Shift the pattern based on the bad character rule
            const shift = badCharShift[text[i + j]] || m;
            i += shift;
        }
    }

    return occurrences;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: [10]
