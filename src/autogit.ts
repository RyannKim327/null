function boyerMooreHorspool(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    // Edge case: If the pattern is empty or longer than the text, return an empty array
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
    let i = 0; // Index in the text

    while (i <= n - m) {
        let j = m - 1; // Start comparing from the last character of the pattern

        // Compare characters from right to left
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        // If all characters matched, record the starting index
        if (j < 0) {
            matches.push(i);
        }

        // Shift the pattern based on the mismatched character in the text
        const charInText = text[i + m - 1];
        i += shiftTable[charInText] ?? defaultShift;
    }

    return matches;
}

// Example usage
const text = "abracadabra";
const pattern = "abra";
const result = boyerMooreHorspool(text, pattern);
console.log("Pattern found at indices:", result); // Output: [0, 7]
