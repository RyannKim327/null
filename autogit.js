function rabinKarp(text, pattern) {
    const d = 256; // number of characters in the input alphabet
    const q = 101; // a prime number

    const M = pattern.length;
    const N = text.length;
    let i, j;
    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let h = 1;

    // The value of h would be "pow(d, M-1)%q"
    for (i = 0; i < M - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of pattern and the first window of text
    for (i = 0; i < M; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (i = 0; i <= N - M; i++) {
        // Check the hash values of current window of text and pattern. If the hash values match, then only check for characters one by one
        if (p === t) {
            let match = true;
            for (j = 0; j < M; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                console.log("Pattern found at index " + i);
            }
        }

        // Calculate the hash value for the next window of text
        if (i < N - M) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % q;

            // We might get negative value of t, converting it to positive
            if (t < 0) {
                t = (t + q);
            }
        }
    }
}

// Example Usage
const text = "ABCCDDAEFG";
const pattern = "CDD";
rabinKarp(text, pattern);
