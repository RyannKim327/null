class BoyerMoore {
    private pattern: string;
    private badCharTable: Map<string, number>;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
    }

    private buildBadCharTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        const length = pattern.length;

        for (let i = 0; i < length; i++) {
            table.set(pattern[i], i);
        }

        return table;
    }

    public search(text: string): number {
        const m = this.pattern.length;
        const n = text.length;
        let skip: number;

        for (let i = 0; i <= n - m; ) {
            skip = 0;

            for (let j = m - 1; j >= 0; j--) {
                if (this.pattern[j] !== text[i + j]) {
                    const badCharIndex = this.badCharTable.get(text[i + j]) || -1;
                    skip = Math.max(1, j - badCharIndex);
                    break;
                }
            }

            if (skip === 0) {
                // Match found at index i
                return i; // Return the index of the first match
            } else {
                i += skip;
            }
        }

        return -1; // No match found
    }
}

// Example usage:
const bm = new BoyerMoore("abc");
const text = "abcpqrabcxyz";
const index = bm.search(text);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
