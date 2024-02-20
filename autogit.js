function rabinKarp(text, pattern) {
    const d = 256; // Number of characters in the input alphabet
    const q = 101; // A prime number

    const M = pattern.length;
    const N = text.length;
    let i, j;
    let pHash = 0; // Hash value for pattern
    let tHash = 0; // Hash value for text
    let h = 1;

    // The value of h would be "pow(d, M-1) % q"
    for (i = 0; i < M - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of pattern and the first window of text
    for (i = 0; i < M; i++) {
        pHash = (d * pHash + pattern.charCodeAt(i)) % q;
        tHash = (d * tHash + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text
    for (i = 0; i <= N - M; i++) {
        // Check hash values of current window of text and pattern
        if (pHash === tHash) {
            // If the hash values match, check each character
            for (j = 0; j < M; j++) {
                if (text[i + j] !== pattern[j])
                    break;
            }
            if (j === M) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        // Calculate hash value for next window of text
        if (i < N - M) {
            tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % q;

            // Make sure the hash value is positive
            if (tHash < 0) {
                tHash = (tHash + q);
            }
        }
    }
}

// Test the algorithm
const text = "ABCCDDAEFG";
const pattern = "CDD";
rabinKarp(text, pattern);
