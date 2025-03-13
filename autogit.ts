class RabinKarp {
    // Prime number used for hash calculation
    private readonly PRIME: number = 101;

    /**
     * Rabin-Karp string search algorithm
     * @param text The text to search in
     * @param pattern The pattern to search for
     * @returns Array of starting indices where pattern is found
     */
    search(text: string, pattern: string): number[] {
        const results: number[] = [];
        
        // If pattern is longer than text, return empty array
        if (pattern.length > text.length) {
            return results;
        }

        // Calculate pattern hash and first window hash
        const patternLength = pattern.length;
        const patternHash = this.calculateHash(pattern, patternLength);
        let currentHash = this.calculateHash(text.slice(0, patternLength), patternLength);

        // Precompute the highest power value for rolling hash
        let highestPow = 1;
        for (let i = 0; i < patternLength - 1; i++) {
            highestPow *= this.PRIME;
        }

        // Sliding window search
        for (let i = 0; i <= text.length - patternLength; i++) {
            // Check if hash matches and then do character-by-character comparison
            if (patternHash === currentHash) {
                if (this.checkEqual(text.slice(i, i + patternLength), pattern)) {
                    results.push(i);
                }
            }

            // Compute next window's hash (rolling hash)
            if (i < text.length - patternLength) {
                currentHash = this.recalculateHash(
                    text, 
                    currentHash, 
                    text[i], 
                    text[i + patternLength], 
                    patternLength, 
                    highestPow
                );
            }
        }

        return results;
    }

    /**
     * Calculate initial hash for a string
     * @param str String to hash
     * @param length Length of string to hash
     * @returns Calculated hash value
     */
    private calculateHash(str: string, length: number): number {
        let hash = 0;
        for (let i = 0; i < length; i++) {
            hash += str.charCodeAt(i) * Math.pow(this.PRIME, i);
        }
        return hash;
    }

    /**
     * Recalculate hash for rolling window
     * @param text Full text
     * @param oldHash Previous window's hash
     * @param oldChar Character leaving the window
     * @param newChar Character entering the window
     * @param patternLength Length of pattern
     * @param highestPow Highest power value
     * @returns Recalculated hash
     */
    private recalculateHash(
        text: string, 
        oldHash: number, 
        oldChar: string, 
        newChar: string, 
        patternLength: number, 
        highestPow: number
    ): number {
        let newHash = oldHash - oldChar.charCodeAt(0);
        newHash /= this.PRIME;
        newHash += newChar.charCodeAt(0) * Math.pow(this.PRIME, patternLength - 1);
        return newHash;
    }

    /**
     * Verify if two strings are exactly equal
     * @param str1 First string
     * @param str2 Second string
     * @returns Boolean indicating equality
     */
    private checkEqual(str1: string, str2: string): boolean {
        return str1 === str2;
    }
}

// Usage example
function main() {
    const rabinKarp = new RabinKarp();
    
    const text = "ABABDABACDABABCABAB";
    const pattern = "ABABCABAB";
    
    const results = rabinKarp.search(text, pattern);
    
    console.log("Pattern found at indices:", results);
}

main();
