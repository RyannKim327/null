function rabinKarp(text: string, pattern: string, prime: number = 101): number[] {
    const M = pattern.length;
    const N = text.length;
    const d = 256; // Number of characters in the input alphabet
    const result: number[] = [];

    // Calculate hash values for the pattern and the first window of text
    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let h = 1;

    // The value of h would be "pow(d, M-1)%prime"
    for (let i = 0; i < M - 1; i++) {
        h = (h * d) % prime;
    }

    // Calculate the hash value of pattern and first window of text
    for (let i = 0; i < M; i++) {
        p = (d * p + pattern.charCodeAt(i)) % prime;
        t = (d * t + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= N - M; i++) {
        // Check the hash values of current window of text and pattern
        if (p === t) {
            // Check for characters one by one
            let j;
            for (j = 0; j < M; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }
            if (j === M) {
                result.push(i); // Pattern found at index i
            }
        }

        // Calculate hash value for next window of text
        if (i < N - M) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % prime;

            // We might get negative value of t, converting it to positive
            if (t < 0) {
                t = t + prime;
            }
        }
    }

    return result;
}

// Example usage
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const indices = rabinKarp(text, pattern);
console.log("Pattern found at indices: ", indices);
