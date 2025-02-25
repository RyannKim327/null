function rabinKarp(text: string, pattern: string): number[] {
    const d = 256; // number of characters in the input alphabet
    const q = 101; // a prime number for hashing
    const m = pattern.length;
    const n = text.length;
    const results: number[] = [];

    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let h = 1;

    // The value of h would be "pow(d, m-1)%q"
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of pattern and first window of text
    for (let i = 0; i < m; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check the hash values of current window of text and pattern
        if (p === t) {
            // If the hash values match, check for characters one by one
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                results.push(i);
            }
        }

        // Calculate hash value for next window of text: Remove leading digit,
        // add trailing digit
        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get negative value of t, converting it to positive
            if (t < 0) {
                t += q;
            }
        }
    }

    return results; // return the list of starting indices
}

// Example usage:
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const indices = rabinKarp(text, pattern);
console.log(`Pattern found at indices: ${indices.join(", ")}`);
