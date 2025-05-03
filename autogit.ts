function rabinKarp(text: string, pattern: string): number[] {
    const d = 256; // Number of characters in the input alphabet
    const q = 101; // A prime number
    const m = pattern.length;
    const n = text.length;
    const result: number[] = [];
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
            // Check for characters one by one
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text.charAt(i + j) !== pattern.charAt(j)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i);
            }
        }

        // Calculate hash value for next window of text: 
        // Remove leading digit, add trailing digit
        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get negative value of t, convert it to positive
            if (t < 0) {
                t = t + q;
            }
        }
    }

    return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const positions = rabinKarp(text, pattern);
console.log(positions); // Output: [10]
