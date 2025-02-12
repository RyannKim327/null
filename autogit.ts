function rabinKarp(text: string, pattern: string, d: number = 256, q: number = 101): number[] {
    const n = text.length;
    const m = pattern.length;
    const result: number[] = [];
    
    const hPattern = computeHash(pattern, m, d, q);
    const hText = computeHash(text, m, d, q);

    let h = 1; // The value of d^(m-1) % q
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    for (let i = 0; i <= n - m; i++) {
        // Check the hash values of pattern and text
        if (hPattern === hText) {
            // If the hash values match, check for characters one by one
            if (text.substring(i, i + m) === pattern) {
                result.push(i); // Pattern found at index i
            }
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            hText = (d * (hText - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // We might get negative value of hText, convert it to positive
            if (hText < 0) {
                hText += q;
            }
        }
    }

    return result;
}

function computeHash(str: string, length: number, d: number, q: number): number {
    let hash = 0;
    for (let i = 0; i < length; i++) {
        hash = (d * hash + str.charCodeAt(i)) % q;
    }
    return hash;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const indices = rabinKarp(text, pattern);
console.log("Pattern found at indices:", indices);
