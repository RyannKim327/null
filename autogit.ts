class RabinKarp {
    private static readonly d: number = 256; // Number of characters in the input alphabet
    private static readonly q: number = 101; // A prime number

    static search(text: string, pattern: string): number {
        const m: number = pattern.length;
        const n: number = text.length;
        const patternHash: number = this.hash(pattern, m);
        const textHash: number = this.hash(text, m);
        const h: number = this.precomputeHashBase(m);

        for (let i: number = 0; i <= n - m; i++) {
            // Check the hash values
            if (patternHash === textHash) {
                // Check characters one by one
                let found: boolean = true;
                for (let j: number = 0; j < m; j++) {
                    if (text[i + j] !== pattern[j]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    return i; // Match found at index i
                }
            }

            // Compute the hash of the next window
            if (i < n - m) {
                textHash = (this.d * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % this.q;
                // We might get a negative value for textHash, convert it to positive
                if (textHash < 0) {
                    textHash = textHash + this.q;
                }
            }
        }

        return -1; // No match found
    }

    private static hash(str: string, length: number): number {
        let hash: number = 0;
        for (let i: number = 0; i < length; i++) {
            hash = (this.d * hash + str.charCodeAt(i)) % this.q;
        }
        return hash;
    }

    private static precomputeHashBase(length: number): number {
        let h: number = 1;
        for (let i: number = 0; i < length - 1; i++) {
            h = (h * this.d) % this.q;
        }
        return h;
    }
}

// Example usage
const text = "ABCCDDAEFG";
const pattern = "CDD";
const result = RabinKarp.search(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found");
}
