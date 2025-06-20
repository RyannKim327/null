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
    const prime = 101; // A prime number to reduce hash collisions

    // Compute the hash of the pattern and the first window of the text
    let patternHash = 0;
    let textHash = 0;
    let h = 1; // Used to calculate the highest power of base modulo prime

    // Precompute h = (base^(m-1)) % prime
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // Calculate the initial hash values for pattern and text
    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text
    for (let i = 0; i <= n - m; i++) {
        // Check if hash values match
        if (patternHash === textHash) {
            // Verify character by character
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

        // Update the hash for the next window
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            // Ensure the hash is non-negative
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
const text = "abracadabra";
const pattern = "abra";
Pattern found at indices: [0, 7]
