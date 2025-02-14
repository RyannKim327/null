class BoyerMoore {
    private pattern: string;
    private badCharTable: { [key: string]: number };
    private goodSuffixTable: number[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.createBadCharTable(pattern);
        this.goodSuffixTable = this.createGoodSuffixTable(pattern);
    }

    private createBadCharTable(pattern: string): { [key: string]: number } {
        const table: { [key: string]: number } = {};
        const m = pattern.length;

        for (let i = 0; i < m; i++) {
            table[pattern[i]] = i;
        }
        return table;
    }

    private createGoodSuffixTable(pattern: string): number[] {
        const m = pattern.length;
        const table: number[] = new Array(m).fill(0);
        const lastPrefixIndex = m; 

        for (let i = m - 1; i >= 0; i--) {
            if (this.isPrefix(pattern, i + 1)) {
                lastPrefixIndex = i + 1;
            }
            table[m - 1 - i] = lastPrefixIndex - i + (m - 1);
        }
        
        for (let i = 0; i < m - 1; i++) {
            const len = this.suffixLength(pattern, i);
            table[len] = m - 1 - i + len;
        }
        return table;
    }

    private isPrefix(pattern: string, p: number): boolean {
        for (let i = p, j = 0; i < pattern.length; i++, j++) {
            if (pattern[i] !== pattern[j]) {
                return false;
            }
        }
        return true;
    }

    private suffixLength(pattern: string, p: number): number {
        let len = 0;
        while (p >= 0 && pattern[p] === pattern[pattern.length - 1 - len]) {
            len++;
            p--;
        }
        return len;
    }

    public search(text: string): number[] {
        const m = this.pattern.length;
        const n = text.length;
        const result: number[] = [];

        if (m === 0 || n === 0 || m > n) {
            return result;
        }

        let s = 0; // shift of the pattern with respect to the text
        while (s <= n - m) {
            let j = m - 1;

            while (j >= 0 && this.pattern[j] === text[s + j]) {
                j--;
            }

            if (j < 0) {
                // Found a match at index s
                result.push(s);
                s += (s + m < n) ? m - this.badCharTable[text[s + m]] || m : 1; // shift pattern
            } else {
                s += Math.max(1, j - (this.badCharTable[text[s + j]] || -1));
            }
        }
        return result;
    }
}

// Example usage
const pattern = "abc";
const text = "abcpqrabcxyz";
const bm = new BoyerMoore(pattern);
const indexes = bm.search(text);
console.log("Pattern found at indices:", indexes);
