class BoyerMooreHorspool {
    /**
     * Performs Boyer-Moore-Horspool string search
     * @param text The text to search in
     * @param pattern The pattern to search for
     * @returns Array of starting indices where pattern is found
     */
    static search(text: string, pattern: string): number[] {
        // Handle edge cases
        if (pattern.length === 0 || text.length === 0) {
            return [];
        }

        // Create bad character shift table
        const badCharShift = this.createBadCharShiftTable(pattern);

        const results: number[] = [];
        let i = pattern.length - 1;

        while (i < text.length) {
            let k = 0;
            // Compare characters from right to left
            while (k < pattern.length && 
                   pattern[pattern.length - 1 - k] === text[i - k]) {
                k++;
            }

            // If full pattern match is found
            if (k === pattern.length) {
                results.push(i - pattern.length + 1);
            }

            // Determine shift amount
            const currentChar = text[i];
            const shift = badCharShift.get(currentChar) ?? pattern.length;
            i += shift;
        }

        return results;
    }

    /**
     * Creates a bad character shift table for the pattern
     * @param pattern The pattern to create shift table for
     * @returns Map of character shifts
     */
    private static createBadCharShiftTable(pattern: string): Map<string, number> {
        const badCharShift = new Map<string, number>();

        // Default shift is pattern length
        for (let i = 0; i < pattern.length - 1; i++) {
            badCharShift.set(pattern[i], pattern.length - 1 - i);
        }

        return badCharShift;
    }
}

// Example usage
function main() {
    const text = "ABAAABCD";
    const pattern = "ABC";
    
    const results = BoyerMooreHorspool.search(text, pattern);
    console.log("Pattern found at indices:", results);
}

main();
// Different search scenarios
console.log(BoyerMooreHorspool.search("hello world", "o")); // [4, 7]
console.log(BoyerMooreHorspool.search("aaaaa", "aa")); // [0, 1, 2, 3]
console.log(BoyerMooreHorspool.search("abcdef", "xyz")); // []
