function rabinKarp(text, pattern) {
    const d = 256; // Number of characters in the input alphabet
    const q = 101; // A prime number

    const m = pattern.length;
    const n = text.length;
    let i, j;
    let pHash = 0; // Hash value for the pattern
    let tHash = 0; // Hash value for the text
    let h = 1;

    // Calculate the h value: h = d^(m-1) % q
    for (i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of the pattern and first window of the text
    for (i = 0; i < m; i++) {
        pHash = (d * pHash + pattern.charCodeAt(i)) % q;
        tHash = (d * tHash + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over the text one by one
    for (i = 0; i <= n - m; i++) {

        // Check if the hash values match
        if (pHash === tHash) {
            // If hash values match, then check character by character
            for (j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }

            if (j === m) {
                console.log("Pattern found at index " + i);
            }
        }

        // Calculate the hash value for the next window of text
        if (i < n - m) {
            tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

            // Make sure tHash is not negative
            if (tHash < 0) {
                tHash = tHash + q;
            }
        }
    }
}

// Test the algorithm with an example
const text = "ABCCAB";
const pattern = "CC";
rabinKarp(text, pattern);
