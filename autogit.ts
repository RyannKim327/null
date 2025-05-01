function rabinKarp(text: string, pattern: string, base: number = 256, prime: number = 101): number[] {
    const m = pattern.length;
    const n = text.length;
    const result: number[] = [];

    if (m > n) return result; // If pattern is longer than text, return empty result

    // Calculate high order value
    let highOrderValue = 1;
    for (let i = 0; i < m - 1; i++) {
        highOrderValue = (highOrderValue * base) % prime;
    }

    // Initial hash values
    let patternHash = 0;
    let textHash = 0;

    for (let i = 0; i < m; i++) {
        patternHash = (patternHash * base + pattern.charCodeAt(i)) % prime;
        textHash = (textHash * base + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= n - m; i++) {
        // Check if the hash values match
        if (patternHash === textHash) {
            // If hash values match, check for characters one by one
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i); // Store the starting index of the match
            }
        }

        // Calculate hash value for the next window of text
        if (i < n - m) {
            textHash = (base * (textHash - text.charCodeAt(i) * highOrderValue) + text.charCodeAt(i + m)) % prime;

            // In case we get a negative value, convert it to positive
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return result;
}

// Example usage
const text = "abcabcabcd";
const pattern = "abc";
const result = rabinKarp(text, pattern);
console.log(`Pattern found at indices: ${result}`);
