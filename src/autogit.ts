class BoyerMoore {
    private pattern: string;
    private lastOccurrence: Map<string, number>;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.lastOccurrence = this.buildLastOccurrenceTable(pattern);
    }

    // Build the last occurrence table for the bad character rule
    private buildLastOccurrenceTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        for (let i = 0; i < pattern.length; i++) {
            table.set(pattern[i], i); // Store the last occurrence of each character
        }
        return table;
    }

    // Search for the pattern in the given text
    public search(text: string): number[] {
        const n = text.length;
        const m = this.pattern.length;
        const result: number[] = [];

        let i = 0; // Index for text
        while (i <= n - m) {
            let j = m - 1; // Start comparing from the end of the pattern

            // Compare characters from the end of the pattern
            while (j >= 0 && this.pattern[j] === text[i + j]) {
                j--;
            }

            if (j < 0) {
                // Match found
                result.push(i);
                i += 1; // Shift by one to continue searching
            } else {
                // Mismatch occurred
                const charInText = text[i + j];
                const lastOccurrenceIndex = this.lastOccurrence.get(charInText);

                // Calculate the shift using the bad character rule
                const shift = lastOccurrenceIndex !== undefined ? Math.max(1, j - lastOccurrenceIndex) : 1;
                i += shift;
            }
        }

        return result;
    }
}

// Example usage
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";

const bm = new BoyerMoore(pattern);
const matches = bm.search(text);

console.log("Pattern found at indices:", matches);
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
Pattern found at indices: [17]
