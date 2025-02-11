function boyerMooreHorspool(text: string, pattern: string): number {
    const m: number = pattern.length;
    const n: number = text.length;

    // Create the bad character shift table
    const badCharShift: { [key: string]: number } = {};
    for (let i = 0; i < m; i++) {
        badCharShift[pattern[i]] = m - i - 1; // Shift distance based on pattern position
    }

    let s: number = 0; // s is the shift of the pattern over the text
    while (s <= n - m) {
        let j: number = m - 1; // Start from the end of the pattern

        // Keep moving the pattern to the left
        while (j >= 0 && text[s + j] === pattern[j]) {
            j--;
        }

        // If the pattern was found
        if (j < 0) {
            return s; // Return the starting index of the match
        } else {
            // Calculate the shift
            const badChar = text[s + j];
            const shift = badCharShift[badChar] ? badCharShift[badChar] : m; // Default shift if char not found
            s += shift; // Move the pattern to the right
        }
    }

    return -1; // Return -1 if no match was found
}

// Example usage
const text = "This is a simple example.";
const pattern = "example";
const result = boyerMooreHorspool(text, pattern);

console.log(result); // Output: index of the starting match or -1 if not found
