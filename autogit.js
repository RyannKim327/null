function rabinKarp(text, pattern) {
    const prime = 101; // A prime number used for hashing
    const patternLength = pattern.length;
    const textLength = text.length;

    let patternHash = 0;
    let textHash = 0;
    let h = 1;

    // Calculate the hash value of pattern and the first window of text
    for (let i = 0; i < patternLength - 1; i++) {
        h = (h * 256) % prime;
    }
    for (let i = 0; i < patternLength; i++) {
        patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (256 * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= textLength - patternLength; i++) {
        // Check the hash values of the current window of text and pattern
        if (textHash === patternHash) {
            let found = true;
            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        // Calculate the hash value for the next window of text
        if (i < textLength - patternLength) {
            textHash = (256 * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + patternLength)) % prime;

            // Convert to positive value if negative
            if (textHash < 0) {
                textHash = textHash + prime;
            }
        }
    }
}

// Test the rabinKarp function
const text = "hello world";
const pattern = "world";
rabinKarp(text, pattern);
