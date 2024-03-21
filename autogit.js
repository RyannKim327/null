function rabinKarpSearch(text, pattern) {
    const base = 256; // base for the hash function
    const prime = 101; // prime number for the hash function
    const patternLength = pattern.length;
    const textLength = text.length;
    const patternHash = hash(pattern, 0, patternLength);
    let textHash = hash(text, 0, patternLength);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
            if (text.substring(i, i + patternLength) === pattern) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        if (i < textLength - patternLength) {
            textHash = (textHash - text.charCodeAt(i) * Math.pow(base, patternLength - 1)) * base + text.charCodeAt(i + patternLength);
            textHash = textHash % prime;
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }
}

function hash(str, start, end) {
    const base = 256;
    const prime = 101;
    let hashValue = 0;
    for (let i = start; i < end; i++) {
        hashValue = (hashValue * base + str.charCodeAt(i)) % prime;
    }
    return hashValue;
}

// Test the function
const text = "abacadabrabracabracadabrabrabracad";
const pattern = "abracadabra";
rabinKarpSearch(text, pattern);
