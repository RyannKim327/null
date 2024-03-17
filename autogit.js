function rabinKarpSearch(text, pattern) {
    const BASE = 26; // Base for the hash function
    const PRIME = 101; // Prime number for hashing
    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = hashString(pattern, patternLength);

    let textHash = hashString(text, patternLength);
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash && text.substring(i, i + patternLength) === pattern) {
            return i; // Pattern found at index i
        }
        if (i < textLength - patternLength) {
            textHash = recalculateHash(text, i, patternLength, textHash, BASE);
        }
    }
    return -1; // Pattern not found in text
}

function hashString(str, length) {
    let hash = 0;
    for (let i = 0; i < length; i++) {
        hash += str.charCodeAt(i) * Math.pow(BASE, i);
    }
    return hash;
}

function recalculateHash(str, oldIndex, patternLength, oldHash, base) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / base;
    newHash += str.charCodeAt(oldIndex + patternLength) * Math.pow(base, patternLength - 1);
    return newHash;
}

// Test the algorithm
const text = "hello world";
const pattern = "world";
const index = rabinKarpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found in text");
}
