function rabinKarpSearch(text, pattern) {
    const prime = 101; // A prime number
    const patternHash = hash(pattern);

    let textHash = hash(text.substring(0, pattern.length));
    if (textHash === patternHash && text.substring(0, pattern.length) === pattern) {
        return 0; // Pattern found at index 0
    }

    for (let i = 1; i <= text.length - pattern.length; i++) {
        textHash = recalculateHash(text, i, pattern.length, textHash, prime);
        if (textHash === patternHash && text.substring(i, i + pattern.length) === pattern) {
            return i; // Pattern found at index i
        }
    }

    return -1; // Pattern not found
}

function hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}

function recalculateHash(str, oldIndex, patternLength, oldHash, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex - 1);
    newHash = newHash + str.charCodeAt(oldIndex + patternLength - 1);
    return newHash;
}

// Test the algorithm
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const result = rabinKarpSearch(text, pattern);

if (result !== -1) {
    console.log("Pattern found at index " + result);
} else {
    console.log("Pattern not found");
}
