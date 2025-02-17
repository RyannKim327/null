function rabinKarp(text: string, pattern: string, prime: number): number[] {
    const d = 256; // Number of characters in the input alphabet
    const q = prime; // A prime number
    const M = pattern.length;
    const N = text.length;
    const result: number[] = [];
    let p = 0; // Hash value for pattern
    let t = 0; // Hash value for text
    let h = 1;

    // The value of h would be "pow(d, M-1)%q"
    for (let i = 0; i < M - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of the pattern and first window of text
    for (let i = 0; i < M; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= N - M; i++) {
        // Check the hash values of current window of text and pattern
        if (p === t) {
            // Check for characters one by one
            let j = 0;
            while (j < M && text[i + j] === pattern[j]) {
                j++;
            }
            if (j === M) {
                result.push(i); // Pattern found at index i
            }
        }

        // Calculate hash value for next window of text:
        // Remove leading digit, add trailing digit
        if (i < N - M) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % q;

            // We might get a negative value of t, converting it to positive
            if (t < 0) {
                t = t + q;
            }
        }
    }

    return result;
}

// Example usage:
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const prime = 101;
const result = rabinKarp(text, pattern, prime);

console.log(`Pattern found at indexes: ${result.join(', ')}`);
