class BoyerMoore {
    private pattern: string;
    private patternLength: number;
    private last: number[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.patternLength = pattern.length;
        this.last = this.buildLastOccurrence();
    }

    // Preprocess the pattern to create the last occurrence table
    private buildLastOccurrence(): number[] {
        const last = new Array(256).fill(-1);
        for (let i = 0; i < this.patternLength; i++) {
            last[this.pattern.charCodeAt(i)] = i;
        }
        return last;
    }

    // Boyer-Moore search algorithm
    public search(text: string): number[] {
        const textLength = text.length;
        const result: number[] = [];
        let i = 0;

        while (i <= textLength - this.patternLength) {
            let j = this.patternLength - 1;

            // Check right to left
            while (j >= 0 && this.pattern[j] === text[i + j]) {
                j--;
            }

            // If the pattern was found
            if (j < 0) {
                result.push(i);
                i += (i + this.patternLength < textLength) ? 
                    this.patternLength - this.last[text.charCodeAt(i + this.patternLength)] : 1;
            } else {
                const charIndex = text.charCodeAt(i + j);
                const shift = Math.max(1, j - this.last[charIndex]);
                i += shift;
            }
        }

        return result;
    }
}

// Example usage
const bm = new BoyerMoore("abc");
const text = "ababcabcabc";
const occurrences = bm.search(text);
console.log(occurrences); // Output: [2, 5, 8]
