function rabinKarp(text: string, pattern: string, d: number = 256, q: number = 101): number[] {
    const m = pattern.length;
    const n = text.length;
    const patternHash = hash(pattern, m, d, q);
    const textHash = hash(text.slice(0, m), m, d, q);
    const result: number[] = [];
    const h = Math.pow(d, m - 1) % q; // The value of d^(m-1) % q

    for (let i = 0; i <= n - m; i++) {
        // Check the hash values of the current text and the pattern
        if (patternHash === textHash) {
            // Check for character by character match
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i); // Pattern found at index i
            }
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            textHash = (d * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get negative value of textHash, convert it to positive
            if (textHash < 0) {
                textHash += q;
            }
        }
    }

    return result;
}

function hash(str: string, length: number, d: number, q: number): number {
    let h = 0;
    for (let i = 0; i < length; i++) {
        h = (d * h + str.charCodeAt(i)) % q;
    }
    return h;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = rabinKarp(text, pattern);
console.log("Pattern found at indices:", result);
