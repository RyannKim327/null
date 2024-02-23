function rabinKarp(text, pattern) {
    const prime = 101; // A prime number used for hashing
    const textLength = text.length;
    const patternLength = pattern.length;
    const base = 256; // The number of characters in the input alphabet

    let patternHash = 0;
    let textHash = 0;
    let h = 1;

    // Calculate the hash value of the pattern and the first window of text
    for (let i = 0; i < patternLength; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Calculate h = base^(patternLength-1) % prime
    for (let i = 0; i < patternLength - 1; i++) {
        h = (h * base) % prime;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= textLength - patternLength; i++) {
        // If the hash values match, check character by character
        if (patternHash === textHash) {
            let match = true;
            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        // Calculate hash value for the next window of text
        if (i < textLength - patternLength) {
            textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + patternLength)) % prime;

            // Handle negative hash values
            if (textHash < 0) {
                textHash = (textHash + prime);
            }
        }
    }
}

// Test the rabinKarp function
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
rabinKarp(text, pattern);
