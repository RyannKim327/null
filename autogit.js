function rabinKarp(text, pattern) {
    const prime = 101; // Prime number to avoid hash collisions
    const patternLength = pattern.length;
    const textLength = text.length;
    const patternHash = hash(pattern, patternLength);
    let textHash = hash(text, patternLength);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash && text.slice(i, i + patternLength) === pattern) {
            return i; // Pattern found at index i
        }
        if (i < textLength - patternLength) {
            textHash = recalculateHash(text, i, i + patternLength, textHash, patternLength, prime);
        }
    }

    return -1; // Pattern not found
}

function hash(str, length) {
    let hashValue = 0;
    for (let i = 0; i < length; i++) {
        hashValue += str.charCodeAt(i) * (Math.pow(101, length - i - 1));
    }
    return hashValue;
}

function recalculateHash(str, oldIndex, newIndex, oldHash, patternLength, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / prime;
    newHash += str.charCodeAt(newIndex) * Math.pow(101, patternLength - 1);
    return newHash;
}

// Test
const text = "ABCCDDAEFG";
const pattern = "CDD";
console.log(rabinKarp(text, pattern)); // Output: 3
