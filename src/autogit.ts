function createLastOccurrenceTable(pattern: string): Map<string, number> {
    const table = new Map<string, number>();
    for (let i = 0; i < pattern.length; i++) {
        table.set(pattern[i], i);
    }
    return table;
}

function boyerMooreSearch(text: string, pattern: string): number {
    const lastOccurrence = createLastOccurrenceTable(pattern);
    const n = text.length;
    const m = pattern.length;

    let i = 0; // index in text

    while (i <= n - m) {
        let j = m - 1; // index in pattern

        // Move backwards through pattern as long as characters match
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found at position i
            return i;
        } else {
            // Mismatch: calculate the shift
            const lastOccIdx = lastOccurrence.get(text[i + j]);
            const shift = lastOccIdx !== undefined ? Math.max(1, j - lastOccIdx) : j + 1;
            i += shift;
        }
    }

    // Pattern not found
    return -1;
}

// Example usage:
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";

const position = boyerMooreSearch(text, pattern);

if (position !== -1) {
    console.log(`Pattern found at index ${position}`);
} else {
    console.log("Pattern not found");
}
