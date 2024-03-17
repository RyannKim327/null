function rabinKarp(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const base = 26; // Assuming the text and pattern contain only lowercase letters (a-z)
    const prime = 101; // Can be any prime number

    if (textLength < patternLength) {
        return -1;
    }

    // Calculate hash values for pattern and first window of text
    let patternHash = 0;
    let textHash = 0;
    let hashMultiplier = 1;
    for (let i = 0; i < patternLength; i++) {
        patternHash = (patternHash * base + pattern.charCodeAt(i)) % prime;
        textHash = (textHash * base + text.charCodeAt(i)) % prime;
        if (i > 0) {
            hashMultiplier = (hashMultiplier * base) % prime;
        }
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
            // Check character by character if the hash values match
            let match = true;
            for (let j = 0; j < patternLength; j++) {
                if (text.charAt(i + j) !== pattern.charAt(j)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i; // Pattern found at index i
            }
        }

        // Calculate hash value for next window of text
        if (i < textLength - patternLength) {
            textHash = (base * (textHash - text.charCodeAt(i) * hashMultiplier) + text.charCodeAt(i + patternLength)) % prime;
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return -1; // Pattern not found in text
}

// Example usage
const text = "abcdbcdab";
const pattern = "bcd";
const result = rabinKarp(text, pattern);
console.log(result);
