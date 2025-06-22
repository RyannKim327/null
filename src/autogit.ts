function rabinKarp(text: string, pattern: string): number[] {
    const prime = 101; // A prime number to reduce collisions in hashing
    const d = 256; // Number of possible characters (ASCII)
    const n = text.length;
    const m = pattern.length;

    if (m > n) return []; // If the pattern is longer than the text, no match is possible

    let result: number[] = [];
    let patternHash = 0; // Hash value for the pattern
    let textHash = 0;    // Hash value for the current text window
    let h = 1;           // Used to calculate the highest power of d for rolling hash

    // Precompute h = d^(m-1) % prime
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % prime;
    }

    // Calculate the hash value of the pattern and the first window of the text
    for (let i = 0; i < m; i++) {
        patternHash = (d * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (d * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check if the hash values match
        if (patternHash === textHash) {
            // Perform a character-by-character comparison to confirm the match
            let j;
            for (j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) break;
            }
            if (j === m) result.push(i); // Add the starting index of the match
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            textHash = (d * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            // Ensure the hash value is positive
            if (textHash < 0) {
                textHash += prime;
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
Pattern found at indices: [0, 10]
