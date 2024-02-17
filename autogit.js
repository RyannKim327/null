function rabinKarp(text, pattern) {
    const BASE = 256; // Base for the hash function
    const PRIME = 101; // A prime number for the hash function
    const lenText = text.length;
    const lenPattern = pattern.length;
    const basePower = Math.pow(BASE, lenPattern - 1) % PRIME;

    function getHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * BASE + str.charCodeAt(i)) % PRIME;
        }
        return hash;
    }

    const patternHash = getHash(pattern);
    let textHash = getHash(text.substring(0, lenPattern));

    for (let i = 0; i <= lenText - lenPattern; i++) {
        if (textHash === patternHash) {
            // Check character by character for a match
            let found = true;
            for (let j = 0; j < lenPattern; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i; // Return the index of the match
            }
        }
        // Recalculate hash value for the next window
        textHash = (BASE * (textHash - text.charCodeAt(i) * basePower) + text.charCodeAt(i + lenPattern)) % PRIME;
        if (textHash < 0) {
            textHash += PRIME;
        }
    }

    return -1; // Pattern not found in the text
}

// Example usage
const text = "abxabcabcaby";
const pattern = "abcaby";
const index = rabinKarp(text, pattern);
console.log(`Pattern found at index ${index}`);
