function rabinKarpSearch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const n = text.length;
    const m = pattern.length;

    // Edge case: if pattern is empty or longer than text
    if (m === 0 || m > n) {
        return result;
    }

    // Constants for the hash function
    const base = 256; // Number of possible characters (ASCII)
    const prime = 101; // A prime number to reduce collisions

    // Precompute base^(m-1) % prime for rolling hash
    let h = 1;
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // Compute initial hash values for pattern and first substring of text
    let patternHash = 0;
    let textHash = 0;
    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text
    for (let i = 0; i <= n - m; i++) {
        // Check if hash values match
        if (patternHash === textHash) {
            // Character-by-character comparison to confirm a match
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i); // Add starting index of match
            }
        }

        // Update hash value for the next substring
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            // Ensure the hash value is non-negative
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return result;
}

// Example usage:
const text = "abracadabra";
const pattern = "abra";
const matches = rabinKarpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
Pattern found at indices: [0, 7]
