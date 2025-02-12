class RabinKarp {
    private static readonly d: number = 256; // Number of characters in the input alphabet
    private static readonly q: number = 101; // A prime number

    public static search(pattern: string, text: string): number[] {
        const M: number = pattern.length;
        const N: number = text.length;
        const result: number[] = [];

        let p: number = 0; // Hash value for pattern
        let t: number = 0; // Hash value for text
        let h: number = 1;

        // The value of h would be "pow(d, M-1)%q"
        for (let i = 0; i < M - 1; i++) {
            h = (h * RabinKarp.d) % RabinKarp.q;
        }

        // Calculate the hash value of pattern and first window of text
        for (let i = 0; i < M; i++) {
            p = (RabinKarp.d * p + pattern.charCodeAt(i)) % RabinKarp.q;
            t = (RabinKarp.d * t + text.charCodeAt(i)) % RabinKarp.q;
        }

        // Slide the pattern over the text one by one
        for (let i = 0; i <= N - M; i++) {
            // Check the hash values of current window of text and pattern
            if (p === t) {
                // Check for characters one by one
                let j: number;
                for (j = 0; j < M; j++) {
                    if (text.charAt(i + j) !== pattern.charAt(j)) {
                        break;
                    }
                }

                if (j === M) {
                    result.push(i); // Match found at index i
                }
            }

            // Calculate hash value for next window of text
            if (i < N - M) {
                t = (RabinKarp.d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % RabinKarp.q;

                // We might get a negative value of t, converting it to positive
                if (t < 0) {
                    t = t + RabinKarp.q;
                }
            }
        }

        return result;
    }
}

// Example usage:
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const indices = RabinKarp.search(pattern, text);
console.log("Pattern found at indices:", indices);
