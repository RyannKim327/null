function rabinKarpSearch(text, pattern) {
    const prime = 101; // A prime number for hash calculation
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
        hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
}

function recalculateHash(str, oldIndex, newIndex, oldHash, patternLength, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / prime;
    newHash += str.charCodeAt(newIndex) * Math.pow(prime, patternLength - 1);
    return newHash;
}

// Test the algorithm
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "sit";
const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
