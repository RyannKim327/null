function rabinKarpSearch(text, pattern) {
    const prime = 101; // Prime number for hashing

    function hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i) * Math.pow(prime, i);
        }
        return hash;
    }

    function reHash(oldHash, oldChar, newChar, patternLength) {
        return (oldHash - oldChar.charCodeAt(0)) / prime + newChar.charCodeAt(0) * Math.pow(prime, patternLength - 1);
    }

    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = hash(pattern);
    let textHash = hash(text.slice(0, patternLength));

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash && text.slice(i, i + patternLength) === pattern) {
            return i; // Pattern found at index i
        }
        if (i < textLength - patternLength) {
            textHash = reHash(textHash, text[i], text[i + patternLength], patternLength);
        }
    }

    return -1; // Pattern not found in text
}

// Example usage
const text = 'ABAAABCD';
const pattern = 'ABC';
const index = rabinKarpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found in text');
}
