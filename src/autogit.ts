function boyerMooreHorspool(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    // Edge case: if the pattern is empty or longer than the text
    if (m === 0 || m > n) {
        return [];
    }

    // Step 1: Build the shift table
    const shiftTable: { [key: string]: number } = {};
    for (let i = 0; i < m - 1; i++) {
        shiftTable[pattern[i]] = m - 1 - i;
    }

    // Default shift for characters not in the pattern
    const defaultShift = m;

    // Step 2: Search for the pattern in the text
    const matches: number[] = [];
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;

        // Compare the pattern with the text from the end
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If the entire pattern matches, record the position
        if (j < 0) {
            matches.push(i);
            i += defaultShift; // Shift by the length of the pattern
        } else {
            // Use the shift table to determine how far to move
            const char = text[i + m - 1];
            i += shiftTable[char] ?? defaultShift;
        }
    }

    return matches;
}

// Example usage
const text = "abracadabra";
const pattern = "abra";
const result = boyerMooreHorspool(text, pattern);

console.log("Pattern found at indices:", result); // Output: Pattern found at indices: [0, 7]
