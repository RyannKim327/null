class BoyerMoore {
    private pattern: string;
    private charTable: number[];
    private offsetTable: number[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.charTable = this.generateCharTable();
        this.offsetTable = this.generateOffsetTable();
    }

    private generateCharTable(): number[] {
        const table: number[] = new Array(256).fill(-1);
        for (let i = 0; i < this.pattern.length; i++) {
            table[this.pattern.charCodeAt(i)] = i;
        }
        return table;
    }

    private generateOffsetTable(): number[] {
        const length = this.pattern.length;
        const table = new Array(length).fill(0);
        let lastPrefixIndex = length;

        for (let i = length - 1; i >= 0; i--) {
            if (this.isPrefix(i + 1)) {
                lastPrefixIndex = i + 1;
            }
            table[length - 1 - i] = lastPrefixIndex - i + (length - 1 - i);
        }

        for (let i = 0; i < length - 1; i++) {
            const sl = this.suffixLength(i);
            table[sl] = Math.max(table[sl], length - 1 - i);
        }

        return table;
    }

    private isPrefix(index: number): boolean {
        for (let i = index, j = 0; i < this.pattern.length; i++, j++) {
            if (this.pattern[i] !== this.pattern[j]) {
                return false;
            }
        }
        return true;
    }

    private suffixLength(index: number): number {
        let length = 0;
        for (let i = index, j = this.pattern.length - 1; i >= 0 && this.pattern[i] === this.pattern[j]; i--, j--) {
            length++;
        }
        return length;
    }

    search(text: string): number {
        const m = this.pattern.length;
        const n = text.length;

        let skip: number;
        let i = 0;

        while (i <= n - m) {
            skip = 0;

            for (let j = m - 1; j >= 0; j--) {
                if (this.pattern[j] !== text[i + j]) {
                    skip = Math.max(1, j - this.charTable[text.charCodeAt(i + j)]);
                    skip = Math.max(skip, this.offsetTable[j]);
                    break;
                }
            }

            if (skip === 0) {
                return i; // Match found
            }

            i += skip;
        }

        return -1; // No match found
    }
}

// Usage example:
const bm = new BoyerMoore("pattern");
const index = bm.search("This is a test string containing a pattern");
console.log(index); // Outputs the index of the first occurrence of "pattern"
