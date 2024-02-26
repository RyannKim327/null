function rabinKarp(text, pattern) {
    const prime = 101; // You can choose any prime number
    const patternHash = getHash(pattern);
    const textHash = getHash(text.substring(0, pattern.length));

    for (let i = 0; i <= text.length - pattern.length; i++) {
        if (patternHash === textHash) {
            if (text.substring(i, i + pattern.length) === pattern) {
                return i; // Match found
            }
        }

        if (i < text.length - pattern.length) {
            textHash = recalculateHash(text, i, i + pattern.length, textHash, prime);
        }
    }

    return -1; // Match not found
}

function getHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}

function recalculateHash(str, oldIndex, newIndex, oldHash, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / prime;
    newHash += str.charCodeAt(newIndex) * Math.pow(prime, str.length - 1);
    return newHash;
}

// Test the Rabin-Karp algorithm
const text = "hello world";
const pattern = "world";
const index = rabinKarp(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index: " + index);
} else {
    console.log("Pattern not found");
}
