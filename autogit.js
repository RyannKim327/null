function rabinKarp(text, pattern) {
    const base = 256; // Base for the hash function
    const prime = 101; // Prime number for hashing

    function hash(str) {
        let hashValue = 0;
        for (let i = 0; i < str.length; i++) {
            hashValue = (hashValue * base + str.charCodeAt(i)) % prime;
        }
        return hashValue;
    }

    const patternHash = hash(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;

    let textHash = hash(text.substring(0, patternLength));

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash) {
            let found = true;
            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i; // Pattern found at index i
            }
        }

        // Update rolling hash
        if (i < textLength - patternLength) {
            textHash = (textHash - text.charCodeAt(i) * Math.pow(base, patternLength - 1)) % prime;
            textHash = (textHash * base + text.charCodeAt(i + patternLength)) % prime;
            textHash = (textHash + prime) % prime; // Ensure the hash value is positive
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "hello world";
const pattern = "world";
const index = rabinKarp(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
