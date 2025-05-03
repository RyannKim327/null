function rabinKarp(text: string, pattern: string): number[] {
    const result: number[] = [];
    const m = pattern.length;
    const n = text.length;
    if (m > n) return result;

    const base = 256;  // number of characters in the input alphabet (extended ASCII)
    const prime = 101; // a prime number to mod the hash values (helps reduce collisions)

    let patternHash = 0;  // hash value for pattern
    let textHash = 0;     // hash value for current text window
    let h = 1;

    // The value of h would be "pow(base, m-1) % prime"
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // Calculate initial hash values for pattern and first window of text
    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= n - m; i++) {
        // If hash values match, then only check characters one by one
        if (patternHash === textHash) {
            let found = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                result.push(i);
            }
        }
        // Calculate hash value for next window of text:
        // Remove leading character, add trailing character
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
            // We might get negative value of textHash, converting it to positive
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return result;
}

// Example usage:
const text = "ABCCDDAEFG";
const pattern = "CDD";
const indices = rabinKarp(text, pattern);
console.log(indices); // Output: [3]
