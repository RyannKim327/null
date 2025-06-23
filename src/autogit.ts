function rabinKarpSearch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const n = text.length;
    const m = pattern.length;

    if (m > n || m === 0) return result;

    // Constants for the hash function
    const prime = 31; // A prime number to reduce collisions
    const mod = 1e9 + 7; // A large prime number to prevent overflow

    // Precompute powers of the prime number
    const primePowers: number[] = new Array(m).fill(1);
    for (let i = 1; i < m; i++) {
        primePowers[i] = (primePowers[i - 1] * prime) % mod;
    }

    // Compute the hash of the pattern
    let patternHash = 0;
    for (let i = 0; i < m; i++) {
        patternHash = (patternHash + (pattern.charCodeAt(i) - 96) * primePowers[i]) % mod;
    }

    // Compute the hash of the first window of the text
    let textHash = 0;
    for (let i = 0; i < m; i++) {
        textHash = (textHash + (text.charCodeAt(i) - 96) * primePowers[i]) % mod;
    }

    // Slide the window over the text
    for (let i = 0; i <= n - m; i++) {
        // If the hashes match, compare the strings to confirm
        if (textHash === patternHash) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) result.push(i); // Match found at index i
        }

        // Update the hash for the next window
        if (i < n - m) {
            textHash = (textHash - (text.charCodeAt(i) - 96)) / prime; // Remove the first character
            textHash = (textHash + (text.charCodeAt(i + m) - 96) * primePowers[m - 1]) % mod; // Add the next character
            textHash = (textHash + mod) % mod; // Ensure non-negative hash
        }
    }

    return result;
}

// Example usage
const text = "abracadabra";
const pattern = "abra";
const matches = rabinKarpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
const text = "abracadabra";
const pattern = "abra";
Pattern found at indices: [0, 7]
