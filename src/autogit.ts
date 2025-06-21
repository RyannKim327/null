function rabinKarp(text: string, pattern: string): number[] {
    const d = 256; // Number of characters in the input alphabet (ASCII)
    const q = 101; // A prime number for modulo operation to reduce hash collisions

    const n = text.length;
    const m = pattern.length;

    if (m > n) return []; // If the pattern is longer than the text, no match is possible

    let h = 1; // Used to calculate the highest power of d for rolling hash
    let p = 0; // Hash value for the pattern
    let t = 0; // Hash value for the current text window
    const result: number[] = [];

    // Precompute h = (d^(m-1)) % q
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of the pattern and the first window of the text
    for (let i = 0; i < m; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check if the hash values match
        if (p === t) {
            // Check for characters one by one to avoid false positives
            let j;
            for (j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) break;
            }
            if (j === m) {
                // Match found at index i
                result.push(i);
            }
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // Ensure the hash value is non-negative
            if (t < 0) {
                t += q;
            }
        }
    }

    return result;
}

// Example usage:
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const matches = rabinKarp(text, pattern);
console.log("Pattern found at indices:", matches);
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
Pattern found at indices: [0, 10]
