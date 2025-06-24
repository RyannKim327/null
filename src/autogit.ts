function rabinKarpSearch(text: string, pattern: string): number[] {
    const d = 256; // Number of characters in the input alphabet (ASCII)
    const q = 101; // A prime number for modulo operation (to avoid overflow)

    const n = text.length;
    const m = pattern.length;

    if (m > n) return []; // Pattern cannot be longer than the text

    let h = 1; // Used to calculate the hash value of the first window
    let p = 0; // Hash value for the pattern
    let t = 0; // Hash value for the current text window
    const result: number[] = [];

    // Precompute h = (d^(m-1)) % q
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of the pattern and the first window of text
    for (let i = 0; i < m; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check if the hash values match
        if (p === t) {
            // Perform a character-by-character comparison to confirm the match
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i); // Add the starting index of the match
            }
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // Handle negative hash values
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
const matches = rabinKarpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
Pattern found at indices: [0, 10]
