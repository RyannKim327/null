function buildBadCharTable(pattern: string): Map<string, number> {
    const table = new Map<string, number>();
    for (let i = 0; i < pattern.length; i++) {
        table.set(pattern[i], i); // Store the last occurrence of each character
    }
    return table;
}
function boyerMooreSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    if (m === 0) return []; // Edge case: empty pattern

    const badCharTable = buildBadCharTable(pattern);
    const result: number[] = [];
    let s = 0; // Shift of the pattern with respect to the text

    while (s <= n - m) {
        let j = m - 1; // Start comparing from the rightmost character of the pattern

        // Match the pattern from right to left
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found at index `s`
            result.push(s);

            // Shift the pattern to align the next character in the text
            s += (s + m < n) ? m - (badCharTable.get(text[s + m]) ?? -1) : 1;
        } else {
            // Mismatch occurred at `pattern[j]` and `text[s + j]`
            const charShift = badCharTable.get(text[s + j]) ?? -1;
            s += Math.max(1, j - charShift);
        }
    }

    return result; // Return all starting indices where the pattern is found
}
const text = "ABAAABCDABCABCD";
const pattern = "ABC";

const matches = boyerMooreSearch(text, pattern);
console.log("Pattern found at indices:", matches);
Pattern found at indices: [4, 9]
