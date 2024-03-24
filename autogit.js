function rabinKarp(text, pattern) {
    const d = 256; // Number of characters in the input alphabet 
    const q = 101; // A prime number

    const M = pattern.length;
    const N = text.length;
    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let h = 1;

    // Calculating hash value of pattern and first window of text
    for (let i = 0; i < M - 1; i++) {
        h = (h * d) % q;
    }
    for (let i = 0; i < M; i++) {
        p = (d * p + pattern[i].charCodeAt(0)) % q;
        t = (d * t + text[i].charCodeAt(0)) % q;
    }

    // Sliding the pattern over text one by one
    for (let i = 0; i <= N - M; i++) {
        // Check the hash values of current window of text and pattern.
        // If the hash values match then only check for characters one by one
        if (p === t) {
            let match = true;
            for (let j = 0; j < M; j++) {
                if (text[i+j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                console.log("Pattern found at index " + i);
            }
        }

        // Calculate hash value for next window of text
        if (i < N - M) {
            t = (d * (t - text[i].charCodeAt(0) * h) + text[i + M].charCodeAt(0)) % q;

            // Sometimes t may be negative, so adding q to make it positive
            if (t < 0) {
                t = (t + q);
            }
        }
    }
}

// Example usage
const text = "AABAACAADAABAABA";
const pattern = "AABA";
rabinKarp(text, pattern);
