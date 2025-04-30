function buildShiftTable(pattern: string): Record<string, number> {
    const m = pattern.length;
    const table: Record<string, number> = {};

    // Default shift is the pattern length for characters not in the pattern
    for(let i = 0; i < 256; i++) {
        table[String.fromCharCode(i)] = m;
    }

    // Fill shift table based on the pattern characters except the last one
    for(let i = 0; i < m - 1; i++) {
        table[pattern[i]] = m - 1 - i;
    }

    return table;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const n = text.length;
    const m = pattern.length;
    if (m === 0) return 0; // Immediate match if pattern empty
    if (m > n) return -1; // Pattern longer than text can't match

    const shiftTable = buildShiftTable(pattern);

    let i = 0;
    while (i <= n - m) {
        let j = m - 1;

        // Match characters from the end of the pattern moving backward
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            return i; // Match found at index i
        }

        // Shift the pattern based on the mismatch character in the text
        const shift = shiftTable[text[i + m - 1]] ?? m;
        i += shift;
    }

    return -1; // No match found
}

// Example usage:
const text = "Here is a simple example";
const pattern = "example";

const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 17
