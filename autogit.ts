function boyerMooreHorspool(text: string, pattern: string): number {
    const m = pattern.length;
    const n = text.length;

    if (m === 0 || n === 0 || m > n) {
        return -1; // Pattern not found
    }

    // Create the shift table
    const shift: number[] = new Array(256).fill(m);
    for (let i = 0; i < m - 1; i++) {
        shift[pattern.charCodeAt(i)] = m - 1 - i;
    }

    let i = 0; // Index for text
    while (i <= n - m) {
        let j = m - 1; // Index for pattern

        // Compare pattern with text
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            return i; // Pattern found at index i
        } else {
            // Shift the pattern right according to the shift table
            i += shift[text.charCodeAt(i + m - 1)] || m; 
        }
    }

    return -1; // Pattern not found
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const result = boyerMooreHorspool(text, pattern);
if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found");
}
