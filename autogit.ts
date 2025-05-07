function rabinKarp(text: string, pattern: string): number[] {
    const d = 256; // number of characters in the input alphabet
    const q = 101; // a prime number
    const M = pattern.length;
    const N = text.length;
    const result: number[] = [];
    const h = Math.pow(d, M - 1) % q; // The base value
    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let i: number;

    // Calculate the hash value of the pattern and the first window of text
    for (i = 0; i < M; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (i = 0; i <= N - M; i++) {
        // Check the hash values of the pattern and text
        if (p === t) {
            // If the hash values match, check for characters one by one
            if (text.substr(i, M) === pattern) {
                result.push(i); // Pattern found at index i
            }
        }

        // Calculate hash value for the next window of text
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

// Example usage
const text = "ababcabcabababd";
const pattern = "abc";
const indices = rabinKarp(text, pattern);
console.log(`Pattern found at indices: ${indices.join(", ")}`);
