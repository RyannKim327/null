function rabinKarpSearch(text, pattern) {
    if (pattern.length === 0) return 0;

    const prime = 31; // Choose a prime number for hashing calculation
    const textLength = text.length;
    const patternLength = pattern.length;
    const primePower = Math.pow(prime, patternLength - 1) % textLength;

    // Calculate the hash value of the pattern and the initial substring of the text
    let patternHash = 0;
    let textHash = 0;
    for (let i = 0; i < patternLength; i++) {
        patternHash = (patternHash * prime + pattern.charCodeAt(i)) % textLength;
        textHash = (textHash * prime + text.charCodeAt(i)) % textLength;
    }

    // Slide the pattern over the text one character at a time and compare hash values
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
            let found = true;
            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) return i;
        }
        // Update the hash value for the next substring
        if (i < textLength - patternLength) {
            textHash = (textHash - text.charCodeAt(i) * primePower) % textLength;
            if (textHash < 0) textHash += textLength;
            textHash = (textHash * prime + text.charCodeAt(i + patternLength)) % textLength;
        }
    }

    return -1; // Pattern not found in the text
}

// Example usage:
const text = "hello world";
const pattern = "world";
const index = rabinKarpSearch(text, pattern);
if (index !== -1) {
    console.log("Pattern found at index", index);
} else {
    console.log("Pattern not found in the text");
}
