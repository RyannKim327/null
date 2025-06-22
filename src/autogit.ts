function rabinKarp(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    if (m === 0 || n < m) {
        return []; // No matches possible
    }

    const result: number[] = [];
    const base = 256; // Base for polynomial hashing
    const prime = 101; // A prime number to reduce hash collisions

    // Compute the hash of the pattern and the first substring of the text
    let patternHash = 0;
    let textHash = 0;
    let h = 1; // Used to calculate the highest power of base modulo prime

    // Precompute h = (base^(m-1)) % prime
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // Calculate initial hash values for pattern and first substring of text
    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text
    for (let i = 0; i <= n - m; i++) {
        // Check if hash values match
        if (patternHash === textHash) {
            // Verify character-by-character
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

        // Compute hash for the next substring using rolling hash
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            // Ensure textHash is non-negative
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return result;
}

// Example usage
const text = "abracadabra";
const pattern = "abra";
const matches = rabinKarp(text, pattern);
console.log("Pattern found at indices:", matches);
const text = "abracadabra";
const pattern = "abra";
Pattern found at indices: [0, 7]
