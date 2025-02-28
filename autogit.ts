class RabinKarp {
    private prime: number;

    constructor(prime: number = 101) {
        this.prime = prime; // A prime number to reduce collisions
    }

    private hash(s: string, end: number): number {
        let h = 0;
        for (let i = 0; i < end; i++) {
            h = (h * 256 + s.charCodeAt(i)) % this.prime;
        }
        return h;
    }

    public search(text: string, pattern: string): number[] {
        const m = pattern.length;
        const n = text.length;
        const result: number[] = [];
        const patternHash = this.hash(pattern, m);
        let textHash = this.hash(text, m);
        const h = 1;

        // Precompute the value of h
        for (let i = 0; i < m - 1; i++) {
            h = (h * 256) % this.prime;
        }

        // Slide the pattern over the text one by one
        for (let i = 0; i <= n - m; i++) {
            // Check for a match
            if (patternHash === textHash) {
                if (text.slice(i, i + m) === pattern) {
                    result.push(i); // Pattern found, store index
                }
            }

            // Calculate the hash for the next window
            if (i < n - m) {
                textHash =
                    (256 * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % this.prime;

                // In case of negative hash value
                if (textHash < 0) {
                    textHash += this.prime;
                }
            }
        }

        return result; // Return all indices where pattern occurs
    }
}

// Example usage:
const rk = new RabinKarp();
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const indices = rk.search(text, pattern);
console.log("Pattern found at indices:", indices);
