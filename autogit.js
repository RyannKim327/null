function searchRabinKarp(text, pattern) {
    const prime = 101; // Prime number for hashing
    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = hashCode(pattern, 0, patternLength, prime);
    let rollingHash = hashCode(text, 0, patternLength, prime);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (rollingHash === patternHash) {
            let match = true;
            for (let j = 0; j < patternLength; j++) {
                if (pattern[j] !== text[i + j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i; // Pattern found at index i
            }
        }
        if (i < textLength - patternLength) {
            rollingHash = recalculateHash(text, i, patternLength, prime, rollingHash);
        }
    }

    return -1; // Pattern not found
}

function hashCode(str, start, end, prime) {
    let hash = 0;
    for (let i = start; i < end; i++) {
        hash = (hash * prime + str.charCodeAt(i)) % prime;
    }
    return hash;
}

function recalculateHash(str, oldIndex, patternLength, prime, oldHash) {
    let newHash = (oldHash - str.charCodeAt(oldIndex) + prime) % prime;
    newHash = (newHash * prime + str.charCodeAt(oldIndex + patternLength)) % prime;
    return newHash;
}

// Test the algorithm
const text = "abracadabra";
const pattern = "cad";
const index = searchRabinKarp(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log(`Pattern not found`);
}
