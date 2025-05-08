function rabinKarpSearch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const m = pattern.length;
    const n = text.length;
    if (m > n) return result;

    // Base for rolling hash (number of possible characters)
    const base = 256;
    // A prime number to mod the hash values
    const prime = 101;
    
    let patternHash = 0; // hash value for pattern
    let textHash = 0;    // hash value for text window
    let h = 1;           // base^(m-1) % prime for rolling hash

    // Precompute h = pow(base, m-1) % prime
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // Calculate initial hash values for pattern and first text window
    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= n - m; i++) {
        // If hash values match, check characters one by one
        if (patternHash === textHash) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i);
            }
        }

        // Calculate hash for next window, if any
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
            // handle negative values in JavaScript modulo
            if (textHash < 0) textHash += prime;
        }
    }

    return result;
}
const text = "abracadabra";
const pattern = "abra";
const matches = rabinKarpSearch(text, pattern);
console.log(matches); // Output: [0, 7]
