function rabinKarp(text, pattern) {
    const base = 26; // Base for the hash function
    const prime = 101; // Prime number for hashing
    const textLength = text.length;
    const patternLength = pattern.length;
    const basePower = Math.pow(base, patternLength - 1) % prime;

    // Calculate the hash value of the pattern
    const patternHash = pattern.split('').reduce((hash, char, index) => {
        return (hash * base + char.charCodeAt(0)) % prime;
    }, 0);

    // Calculate the initial hash value of the text
    let textHash = text.substr(0, patternLength).split('').reduce((hash, char, index) => {
        return (hash * base + char.charCodeAt(0)) % prime;
    }, 0);

    // Slide the pattern over the text and compare hash values
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash) {
            // Verify the actual characters
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

        // Update hash value for the next substring of text
        if (i < textLength - patternLength) {
            let oldCharHash = text.charCodeAt(i) * basePower % prime;
            textHash = (textHash - oldCharHash + prime) * base + text.charCodeAt(i + patternLength) % prime;
        }
    }
}

// Test the algorithm
const text = "ABCCDDAEFG";
const pattern = "CDD";
rabinKarp(text, pattern);
