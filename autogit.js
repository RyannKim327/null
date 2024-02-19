function rabinKarp(text, pattern) {
    const prime = 101; // Prime number for hashing
    const textLength = text.length;
    const patternLength = pattern.length;
    const primePower = Math.pow(prime, patternLength - 1);

    // Calculate the hash values for the pattern and the first substring of the text
    let patternHash = 0;
    let textHash = 0;
    for (let i = 0; i < patternLength; i++) {
        patternHash = (prime * patternHash + pattern.charCodeAt(i)) % primePower;
        textHash = (prime * textHash + text.charCodeAt(i)) % primePower;
    }

    // Iterate through the text to find the pattern
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
            let found = true;
            for (let j = 0; j < patternLength; j++) {
                if (pattern[j] !== text[i + j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                console.log("Pattern found at index " + i);
            }
        }

        if (i < textLength - patternLength) {
            textHash = (prime * (textHash - text.charCodeAt(i) * primePower) + text.charCodeAt(i + patternLength)) % primePower;
            if (textHash < 0) {
                textHash += primePower;
            }
        }
    }
}

// Test the rabinKarp function
const text = "ABCCDDAEFG";
const pattern = "CDD";
rabinKarp(text, pattern);
