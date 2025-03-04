class RabinKarp {
    private static readonly PRIME: number = 101; // A prime number for hashing
    private static readonly BASE: number = 256; // Number of characters in the input alphabet

    // Search for the pattern in the text
    public static search(text: string, pattern: string): number[] {
        const n: number = text.length;
        const m: number = pattern.length;
        const patternHash: number = this.calculateHash(pattern, m);
        const textHash: number = this.calculateHash(text, m);
        const result: number[] = [];

        for (let i = 0; i <= n - m; i++) {
            // Check for hash match
            if (patternHash === textHash) {
                // Verify the match to handle hash collisions
                if (text.substring(i, i + m) === pattern) {
                    result.push(i);
                }
            }

            // Calculate the hash for the next substring
            if (i < n - m) {
                textHash = this.recalculateHash(text, i, m, textHash);
            }
        }

        return result;
    }

    // Calculate the initial hash value for a string
    private static calculateHash(str: string, length: number): number {
        let hash: number = 0;
        for (let i = 0; i < length; i++) {
            hash = (hash * this.BASE + str.charCodeAt(i)) % this.PRIME;
        }
        return hash;
    }

    // Recalculate the hash (rolling hash) when sliding the window
    private static recalculateHash(text: string, oldIndex: number, m: number, oldHash: number): number {
        // Remove leading character
        let newHash = (oldHash - text.charCodeAt(oldIndex) * Math.pow(this.BASE, m - 1)) % this.PRIME;
        // Add trailing character
        newHash = (newHash * this.BASE + text.charCodeAt(oldIndex + m)) % this.PRIME;
        // Ensure newHash is non-negative
        if (newHash < 0) {
            newHash += this.PRIME;
        }
        return newHash;
    }
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const positions = RabinKarp.search(text, pattern);
console.log(`Pattern found at positions: ${positions}`);
