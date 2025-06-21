/**
 * Function to preprocess the last occurrence of each character in the pattern.
 * @param pattern - The pattern string to search for.
 * @returns A Map where keys are characters and values are their last occurrence indices.
 */
function preprocessBadCharacterTable(pattern: string): Map<string, number> {
    const badCharTable = new Map<string, number>();
    for (let i = 0; i < pattern.length; i++) {
        badCharTable.set(pattern[i], i); // Store the last occurrence index of each character
    }
    return badCharTable;
}

/**
 * Boyer-Moore algorithm for string searching using the bad character rule.
 * @param text - The text in which to search.
 * @param pattern - The pattern to search for.
 * @returns An array of starting indices where the pattern is found in the text.
 */
function boyerMooreSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    if (m === 0) return []; // Edge case: empty pattern

    const badCharTable = preprocessBadCharacterTable(pattern);
    const result: number[] = [];

    let s = 0; // Shift of the pattern with respect to the text
    while (s <= n - m) {
        let j = m - 1; // Start from the end of the pattern

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern matched
            result.push(s);
            // Shift the pattern to align with the next possible match
            s += (s + m < n) ? m - (badCharTable.get(text[s + m]) ?? -1) : 1;
        } else {
            // Mismatch occurred at pattern[j]
            const badCharShift = j - (badCharTable.get(text[s + j]) ?? -1);
            s += Math.max(1, badCharShift); // Ensure we shift at least one position
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
