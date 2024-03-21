function rabinKarpSearch(text, pattern) {
    const patLen = pattern.length;
    const txtLen = text.length;
    const primeNumber = 101; // Choose a prime number for hashing

    // Calculate hash for pattern and first window of text
    let patternHash = 0;
    let textHash = 0;
    let h = 1;
    let found = false;

    for (let i = 0; i < patLen - 1; i++) {
        h = (h * 256) % primeNumber;
    }

    // Compute the hash value of pattern and the first window of text
    for (let i = 0; i < patLen; i++) {
        patternHash = (256 * patternHash + pattern.charCodeAt(i)) % primeNumber;
        textHash = (256 * textHash + text.charCodeAt(i)) % primeNumber;
    }

    // Slide the pattern over the text and compare hash values
    for (let i = 0; i <= txtLen - patLen; i++) {
        if (patternHash === textHash) {
            let match = true;
            for (let j = 0; j < patLen; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                console.log("Pattern found at index " + i);
                found = true;
            }
        }

        // Compute hash value for the next window of text
        if (i < txtLen - patLen) {
            textHash = (256 * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + patLen)) % primeNumber;

            // Make sure textHash is positive
            if (textHash < 0) {
                textHash += primeNumber;
            }
        }
    }

    if (!found) {
        console.log("Pattern not found");
    }
}

// Test the function
const text = "AABAACAADAABAABA";
const pattern = "AABA";
rabinKarpSearch(text, pattern);
