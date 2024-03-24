function rabinKarpSearch(text, pattern) {
    const base = 26; // Assuming lowercase English alphabets
    const prime = 101; // Random prime number

    const patternLength = pattern.length;
    const textLength = text.length;
    const patternHash = hash(pattern, base, prime);
    let textHash = hash(text.substring(0, patternLength), base, prime);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash && text.substring(i, i + patternLength) === pattern) {
            return i;
        }
        if (i < textLength - patternLength) {
            // Recalculate the hash value for the next substring
            textHash = recalculateHash(text, base, prime, i, patternLength, textHash);
        }
    }

    return -1; // Pattern not found
}

function hash(str, base, prime) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue * base + str.charCodeAt(i)) % prime;
    }
    return hashValue;
}

function recalculateHash(text, base, prime, oldIndex, patternLength, oldHash) {
    let newHash = oldHash - text.charCodeAt(oldIndex);
    newHash = (newHash * base + text.charCodeAt(oldIndex + patternLength)) % prime;
    if (newHash < 0) {
        newHash += prime;
    }
    return newHash;
}

// Example
const text = "abcdbcd";
const pattern = "bcd";

const index = rabinKarpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
