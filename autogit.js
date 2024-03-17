function rabinKarp(str, pattern) {
    const base = 256; // Base value for hashing, typically the size of the alphabet
    const prime = 101; // A prime number to use for hashing calculations

    function hash(text, length) {
        let hashValue = 0;
        for (let i = 0; i < length; i++) {
            hashValue = (hashValue * base + text.charCodeAt(i)) % prime;
        }
        return hashValue;
    }

    function rehash(oldHash, oldChar, newChar, length) {
        let newHash = (oldHash - oldChar * Math.pow(base, length - 1)) * base + newChar;
        return newHash % prime;
    }

    const n = str.length;
    const m = pattern.length;
    const patternHash = hash(pattern, m);
    let textHash = hash(str, m);

    for (let i = 0; i <= n - m; i++) {
        if (textHash === patternHash && str.substring(i, i + m) === pattern) {
            return i; // Pattern found at index i
        }
        if (i < n - m) {
            textHash = rehash(
                textHash,
                str.charCodeAt(i),
                str.charCodeAt(i + m),
                m
            );
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return -1; // Pattern not found
}

// Usage
const text = "ABABCABAB";
const pattern = "BAB";
const index = rabinKarp(text, pattern);
if (index !== -1) {
    console.log("Pattern found at index " + index);
} else {
    console.log("Pattern not found");
}
