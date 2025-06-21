function boyerMooreHorspool(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    // Edge case: if the pattern is empty, return an empty array
    if (m === 0) return [];

    // Step 1: Build the shift table
    const shiftTable: Map<string, number> = new Map();

    // Initialize the shift table with default values
    for (let i = 0; i < m - 1; i++) {
        const char = pattern[i];
        shiftTable.set(char, m - 1 - i);
    }

    // Default shift for characters not in the pattern
    const defaultShift = m;

    // Step 2: Search for the pattern in the text
    const result: number[] = [];
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;

        // Compare the pattern with the text from right to left
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the entire pattern matches, record the position
        if (j < 0) {
            result.push(i);
            i += defaultShift; // Shift by the length of the pattern
        } else {
            // Use the shift table to determine the shift distance
            const char = text[i + m - 1];
            const shift = shiftTable.get(char) || defaultShift;
            i += shift;
        }
    }

    return result;
}
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";

const matches = boyerMooreHorspool(text, pattern);
console.log("Matches found at indices:", matches);
// Output: Matches found at indices: [17]
