function rabinKarp(pattern, text) {
    const prime = 101; // Choose a prime number for hashing
    const patternLength = pattern.length;
    const textLength = text.length;
    const primeToPowerOfPatternLength = Math.pow(prime, patternLength);

    // Calculate the hash for the pattern and the initial substring of text of length patternLength
    let patternHash = 0;
    let textHash = 0;
    for (let i = 0; i < patternLength; i++) {
        patternHash = patternHash * prime + pattern.charCodeAt(i);
        textHash = textHash * prime + text.charCodeAt(i);
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
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

        // Recalculate the hash for the next substring of text
        if (i < textLength - patternLength) {
            textHash = (textHash - text.charCodeAt(i) * primeToPowerOfPatternLength) * prime + text.charCodeAt(i + patternLength);
        }
    }
}

// Example usage
const text = "ABCCBDABCCABC";
const pattern = "ABC";
rabinKarp(pattern, text);
