function rabinKarpSearch(text, pattern) {
    const BASE = 256;
    const PRIME = 101;
    const patternLength = pattern.length;
    const textLength = text.length;
    let patternHash = 0;
    let textHash = 0;
    let h = 1;
    let result = [];

    // Calculate h = BASE^(M-1) % PRIME
    for (let i = 0; i < patternLength - 1; i++) {
        h = (h * BASE) % PRIME;
    }

    // Calculate hash value for pattern and first window of text
    for (let i = 0; i < patternLength; i++) {
        patternHash = (BASE * patternHash + pattern.charCodeAt(i)) % PRIME;
        textHash = (BASE * textHash + text.charCodeAt(i)) % PRIME;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= textLength - patternLength; i++) {
        // Check hash values of current window of text and pattern
        if (patternHash === textHash) {
            let j;
            // Check each character of pattern with corresponding characters of the text
            for (j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }
            if (j === patternLength) {
                result.push(i);
            }
        }

        // Calculate hash value for next window of text
        if (i < textLength - patternLength) {
            textHash = (BASE * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + patternLength)) % PRIME;
            if (textHash < 0) {
                textHash += PRIME;
            }
        }
    }

    return result;
}

// Test the function
const text = "AABAACAADAABAABA";
const pattern = "AABA";
const result = rabinKarpSearch(text, pattern);
console.log("Pattern found at index:", result);
