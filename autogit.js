function rabinKarp(text, pattern) {
    const prime = 101; // Prime number used for hashing
    const patternLength = pattern.length;
    const textLength = text.length;
    const patternHash = hashCode(pattern, patternLength);
    let textHash = hashCode(text, patternLength);

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
                return i; // Pattern found at index i
            }
        }
        if (i < textLength - patternLength) {
            textHash = rehash(text, i, patternLength, textHash, prime);
        }
    }

    return -1; // Pattern not found
}

function hashCode(str, length) {
    let hash = 0;
    for (let i = 0; i < length; i++) {
        hash += str.charCodeAt(i) * Math.pow(101, length - i - 1);
    }
    return hash;
}

function rehash(str, oldIndex, patternLength, oldHash, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / 101;
    newHash += str.charCodeAt(oldIndex + patternLength) * Math.pow(101, patternLength - 1);
    return newHash;
}

// Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = rabinKarp(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
