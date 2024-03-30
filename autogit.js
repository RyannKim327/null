function rabinKarp(text, pattern) {
    const prime = 101; // A prime number for hashing
    const n = text.length;
    const m = pattern.length;
    const patternHash = hash(pattern, m);
    let textHash = hash(text, m);

    for (let i = 0; i <= n - m; i++) {
        if (patternHash === textHash) {
            let found = true;
            for (let j = 0; j < m; j++) {
                if (pattern[j] !== text[i + j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i; // Pattern found at index i
            }
        }

        if (i < n - m) {
            textHash = rehash(text, i, m, textHash, prime);
        }
    }

    return -1; // Pattern not found
}

function hash(str, len) {
    let hash = 0;
    for (let i = 0; i < len; i++) {
        hash += str.charCodeAt(i) * Math.pow(101, len - i - 1);
    }
    return hash;
}

function rehash(str, oldIndex, len, oldHash, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / 101;
    newHash += str.charCodeAt(oldIndex + len) * Math.pow(101, len - 1);
    return newHash;
}

// Example usage
const text = "ABCCDDAEFG";
const pattern = "CDD";
const index = rabinKarp(text, pattern);
console.log(`Pattern found at index: ${index}`);
