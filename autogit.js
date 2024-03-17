function rabinKarpSearch(text, pattern) {
    const base = 256; // Base for the hashing function
    const prime = 101; // Prime number for hashing

    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = hash(pattern, patternLength);
    let textHash = hash(text, patternLength);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash && text.substring(i, i + patternLength) === pattern) {
            return i; // Match found at index i
        }
        if (i < textLength - patternLength) {
            textHash = recalculateHash(text, i, patternLength, textHash, base, patternLength, prime);
        }
    }
    return -1; // No match found
}

function hash(str, length) {
    let hashValue = 0;
    for (let i = 0; i < length; i++) {
        hashValue += str.charCodeAt(i) * Math.pow(256, length - i - 1);
    }
    return hashValue;
}

function recalculateHash(str, oldIndex, patternLength, oldHash, base, newLength, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex) * Math.pow(base, patternLength - 1);
    newHash = newHash * base + str.charCodeAt(oldIndex + patternLength);
    return newHash;
}

// Test the algorithm
const text = "abracadabra";
const pattern = "cad";
console.log(rabinKarpSearch(text, pattern)); // Output: 5
