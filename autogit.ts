function rabinKarp(text: string, pattern: string): number[] {
    const d = 256; // Number of characters in the input alphabet
    const q = 101; // A prime number for hashing
    const m = pattern.length;
    const n = text.length;
    const results: number[] = [];

    // Hash values
    let pHash = 0; // Hash value for the pattern
    let tHash = 0; // Hash value for text
    let h = 1;

    // The value of h is "pow(d, m-1)%q"
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of pattern and first window of text
    for (let i = 0; i < m; i++) {
        pHash = (d * pHash + pattern.charCodeAt(i)) % q;
        tHash = (d * tHash + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check the hash values
        if (pHash === tHash) {
            // Hash values are the same, check for actual character by character match
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                results.push(i); // Match found at index i
            }
        }

        // Calculate hash value for next window of text: Remove leading digit, add trailing digit
        if (i < n - m) {
            tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get negative value of tHash, converting it to positive
            if (tHash < 0) {
                tHash += q;
            }
        }
    }

    return results; // Return all match starting indices
}

// Example usage:
const text = "ababcababcabc";
const pattern = "abc";
const indices = rabinKarp(text, pattern);
console.log(`Pattern found at indices: ${indices.join(", ")}`);
