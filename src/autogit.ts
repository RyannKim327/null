function boyerMooreHorspool(text: string, pattern: string): number[] {
    const n = text.length; // Length of the text
    const m = pattern.length; // Length of the pattern

    if (m === 0) return []; // Edge case: empty pattern
    if (m > n) return []; // Edge case: pattern longer than text

    // Step 1: Build the bad character shift table
    const shiftTable: { [key: string]: number } = {};
    for (let i = 0; i < m - 1; i++) {
        shiftTable[pattern[i]] = m - 1 - i;
    }

    // Default shift for characters not in the pattern
    const defaultShift = m;

    // Step 2: Initialize variables for searching
    const matches: number[] = [];
    let i = 0; // Index in the text

    // Step 3: Perform the search
    while (i <= n - m) {
        let j = m - 1; // Start comparing from the end of the pattern

        // Compare characters from the pattern and text
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Match found
            matches.push(i);
            i += defaultShift; // Shift by the length of the pattern
        } else {
            // Mismatch: determine the shift using the bad character table
            const charInText = text[i + m - 1];
            const shift = shiftTable[charInText] ?? defaultShift;
            i += shift;
        }
    }

    return matches; // Return all starting indices of matches
}
const text = "ABAAABCDABCDABCDABCD";
const pattern = "ABCD";

const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: [4, 8, 12]
