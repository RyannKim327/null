function rabinKarp(text, pattern) {
    const prime = 101; // A prime number for hashing
    const base = 256; // Number of characters in the input alphabet

    const textLength = text.length;
    const patternLength = pattern.length;
    const hash = (str) => str.split('').reduce((acc, char, i) => acc + char.charCodeAt(0) * (base ** i), 0);

    if (textLength < patternLength) {
        return -1; // Pattern cannot be found in text
    }

    const patternHash = hash(pattern) % prime;
    let textHash = hash(text.substring(0, patternLength)) % prime;

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash) {
            let match = true;
            for (let j = 0; j < patternLength; j++) {
                if (pattern[j] !== text[i + j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i; // Pattern found at index i in the text
            }
        }

        // Calculate the rolling hash for the next window in the text
        if (i < textLength - patternLength) {
            textHash = (textHash - text[i].charCodeAt(0) * (base ** (patternLength - 1))) * base +
                text[i + patternLength].charCodeAt(0);
            textHash = (textHash + prime) % prime;
        }
    }

    return -1; // Pattern not found in text
}

// Example
const text = "abracadabra";
const pattern = "cad";
console.log(rabinKarp(text, pattern)); // Output: 4
