function rabinKarpSearch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const n = text.length;
    const m = pattern.length;

    if (m > n || m === 0) return result; // Edge case: pattern longer than text or empty pattern

    const base = 256; // Base for polynomial rolling hash function (number of characters in the input alphabet)
    const prime = 101; // A prime number to reduce collisions

    let patternHash = 0; // Hash value for the pattern
    let textHash = 0; // Hash value for the current text window
    let h = 1; // The value of h is "base^(m-1) % prime"

    // Precompute h = (base^(m-1)) % prime
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // Calculate the hash value of the pattern and the first window of the text
    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check if the hash values of the current window of text and the pattern match
        if (patternHash === textHash) {
            // Check character by character to confirm the match
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
        // Remove the leading character and add the trailing character
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            // Handle negative hash values
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
const matches = rabinKarpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
Pattern found at indices: [0, 10]
