function rabinKarpSearch(text, pattern) {
    const BASE = 256; // Base value for the hash function
    const PRIME = 101; // Prime number for hashing

    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = hash(pattern, patternLength); // Hash value of the pattern
    let textHash = hash(text, patternLength); // Hash value of the initial window in the text

    // Calculate hash value for a given string and length
    function hash(str, length) {
        let hashVal = 0;
        for (let i = 0; i < length; i++) {
            hashVal = (hashVal * BASE + str.charCodeAt(i)) % PRIME;
        }
        return hashVal;
    }

    // Iterate through the text to find the pattern
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash) {
            let match = true;
            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i; // Return the index of the match
            }
        }

        // Calculate hash value for the next window in the text
        if (i < textLength - patternLength) {
            textHash = (textHash - text.charCodeAt(i) * Math.pow(BASE, patternLength - 1)) * BASE + text.charCodeAt(i + patternLength);
            textHash = (textHash % PRIME + PRIME) % PRIME; // Ensure the hash value is positive
        }
    }

    return -1; // Return -1 if pattern is not found
}

// Usage example
const text = "the quick brown fox jumps over the lazy dog";
const pattern = "fox";
const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index: " + index);
} else {
    console.log("Pattern not found");
}
