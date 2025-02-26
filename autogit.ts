class BoyerMoore {
    private pattern: string;
    private badCharTable: { [key: string]: number };
    
    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
    }

    private buildBadCharTable(pattern: string): { [key: string]: number } {
        const badCharTable: { [key: string]: number } = {};
        const m = pattern.length;

        for (let i = 0; i < m; i++) {
            badCharTable[pattern[i]] = i;
        }

        return badCharTable;
    }

    public search(text: string): number {
        const n = text.length;
        const m = this.pattern.length;
        let s = 0;

        while (s <= n - m) {
            let j = m - 1;

            while (j >= 0 && this.pattern[j] === text[s + j]) {
                j--;
            }

            if (j < 0) {
                // Match found at index s
                console.log(`Pattern found at index ${s}`);
                // Move the pattern so that the next character in the text aligns with the last character of the pattern
                s += (s + m < n) ? m - this.badCharTable[text[s + m]] || 1 : 1;
            } else {
                // Shift the pattern to the right
                s += Math.max(1, j - (this.badCharTable[text[s + j]] || -1));
            }
        }

        return -1; // Return -1 if the pattern is not found
    }
}

// Example usage
const bm = new BoyerMoore("pattern");
const text = "This is a simple text where we search for a pattern";
bm.search(text);
