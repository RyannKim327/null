function rabinKarpSearch(text, pattern) {
    const prime = 101; // A prime number used for hashing
    const textSize = text.length;
    const patternSize = pattern.length;
    const primeToPatternSize = Math.pow(prime, patternSize);

    let textHash = 0; 
    let patternHash = 0;

    // Calculate initial hash values for text and pattern
    for (let i = 0; i < patternSize; i++) {
        textHash = textHash * prime + text.charCodeAt(i);
        patternHash = patternHash * prime + pattern.charCodeAt(i);
    }

    for (let i = 0; i <= textSize - patternSize; i++) {
        if (textHash === patternHash) {
            let found = true;
            for (let j = 0; j < patternSize; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        // Update hash value for next window of text
        if (i < textSize - patternSize) {
            textHash = textHash - text.charCodeAt(i) * primeToPatternSize; 
            textHash = textHash * prime + text.charCodeAt(i + patternSize);
        }
    }
}

// Test the function
const text = "ABCCDDAEFG";
const pattern = "CDD";
rabinKarpSearch(text, pattern);
