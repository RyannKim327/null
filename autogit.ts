function rabinKarp(text: string, pattern: string): number {
    const d = 256; // number of characters in the input alphabet
    const q = 101; // a prime number to use for hashing
    const m = pattern.length;
    const n = text.length;
    const h = Math.pow(d, m - 1) % q; // The highest power of d
    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let i, j;

    // Pre-compute the hash values of the pattern and the first window of the text
    for (i = 0; i < m; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over the text one by one
    for (i = 0; i <= n - m; i++) {
        // Check if the hash values match
        if (p === t) {
            // If the hash values match, we need to check for the actual characters
            let match = true;
            for (j = 0; j < m; j++) {
                if (text.charAt(i + j) !== pattern.charAt(j)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        // Calculate hash value for the next window of text
        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get a negative value of t, converting it to positive
            if (t < 0) {
                t = (t + q);
            }
        }
    }

    return -1; // If no match is found
}

// Example Usage
const text = "ABCCDDAEFG";
const pattern = "CDD";
rabinKarp(text, pattern);
