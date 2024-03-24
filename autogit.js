function rabinKarp(text, pattern) {
    const base = 256; // No. of characters in the character set (ASCII)
    const prime = 101; // A prime number to use for hashing

    const patternLength = pattern.length;
    const textLength = text.length;
    let patternHash = 0; // Hash of the pattern
    let textHash = 0; // Hash of the current substring in the text

    // Calculate the hash of the pattern and the first substring of text
    for (let i = 0; i < patternLength; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    // Calculate base^patternLength
    let basePower = 1;
    for (let i = 0; i < patternLength - 1; i++) {
        basePower = (base * basePower) % prime;
    }

    // Slide the pattern over the text one by one
    for (let i = 0; i <= textLength - patternLength; i++) {
        // Check if hashes match
        if (patternHash === textHash) {
            let match = true;
            // Check character by character
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

        // Calculate hash for the next substring
        if (i < textLength - patternLength) {
            textHash = (base * (textHash - text.charCodeAt(i) * basePower) + text.charCodeAt(i + patternLength)) % prime;
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }
}

// Test the algorithm
const text = "AABAACAADAABAABA";
const pattern = "AABA";
rabinKarp(text, pattern);
