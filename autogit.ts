function rabinKarp(text: string, pattern: string, d: number = 256, q: number = 101): number[] {
    const m = pattern.length;
    const n = text.length;
    const result: number[] = [];
    const hPattern = 0; // Hash value for pattern
    const hText = 0; // Hash value for text
    const h = Math.pow(d, m - 1) % q; // The value of d^(m-1) % q

    // Calculate the hash value of the pattern and the first window of text
    for (let i = 0; i < m; i++) {
        hPattern = (d * hPattern + pattern.charCodeAt(i)) % q;
        hText = (d * hText + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check the hash values of the current window of text and pattern
        if (hPattern === hText) {
            // If the hash values match, check for characters one by one
            let j;
            for (j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }
            if (j === m) {
                result.push(i); // Pattern found at index i
            }
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            hText = (d * (hText - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get negative value of hText, converting it to positive
            if (hText < 0) {
                hText += q;
            }
        }
    }

    return result; // Return the list of starting indices where pattern is found
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABAB";
const indices = rabinKarp(text, pattern);
console.log(`Pattern found at indices: ${indices.join(", ")}`);
