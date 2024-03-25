function rabinKarpSearch(text, pattern) {
    const d = 256; // Number of characters in the input alphabet
    const q = 101; // A prime number

    const M = pattern.length;
    const N = text.length;
    let p = 0; // Hash value for pattern
    let t = 0; // Hash value for text
    let h = 1;

    // The value of h would be "pow(d, M-1)%q"
    for (let i = 0; i < M - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate the hash value of pattern and the first window of text
    for (let i = 0; i < M; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= N - M; i++) {
        // Check the hash values of current window of text and pattern
        if (p === t) {
            let match = true;
            for (let j = 0; j < M; j++) {
                if (text[i + j] !== pattern[j]) {
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
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % q;

            // Make sure t is positive
            if (t < 0) {
                t = t + q;
            }
        }
    }
}

let text = "AABAACAADAABAABA";
let pattern = "AABA";

rabinKarpSearch(text, pattern);
