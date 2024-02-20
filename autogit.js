function rabinKarpSearch(text, pattern) {
    const prime = 101; // A prime number
    const textLength = text.length;
    const patternLength = pattern.length;
    const targetHash = hash(pattern, patternLength, prime);
    let textHash = hash(text, patternLength, prime);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === targetHash && checkEqual(text, pattern, i)) {
            return i; // Return the index where the pattern starts
        }
        if (i < textLength - patternLength) {
            textHash = recalculateHash(text, i, patternLength, textHash, prime);
        }
    }

    return -1; // Pattern not found
}

function hash(str, length, prime) {
    let hashValue = 0;
    for (let i = 0; i < length; i++) {
        hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
}

function recalculateHash(str, oldIndex, patternLength, oldHash, prime) {
    let newHash = (oldHash - str.charCodeAt(oldIndex)) / prime;
    newHash += str.charCodeAt(oldIndex + patternLength) * Math.pow(prime, patternLength - 1);
    return newHash;
}

function checkEqual(text, pattern, startIndex) {
    for (let i = 0; i < pattern.length; i++) {
        if (text[startIndex + i] !== pattern[i]) {
            return false;
        }
    }
    return true;
}

// Example usage
const text = "ABAAABCDBBABCDDEBCABC";
const pattern = "BCD";
const startIndex = rabinKarpSearch(text, pattern);
console.log(startIndex); // Output: 8
