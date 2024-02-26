function rabinKarpSearch(pattern, text) {
    const BASE = 26;
    const PRIME = 101;
    const patternLength = pattern.length;
    const textLength = text.length;
    const patternHash = hash(pattern);
    let textHash = hash(text.substring(0, patternLength));

    function hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * BASE + str.charCodeAt(i)) % PRIME;
        }
        return hash;
    }

    function rehash(text, oldIndex, newIndex) {
        let oldChar = text.charCodeAt(oldIndex);
        let newChar = text.charCodeAt(newIndex);
        textHash = (textHash - Math.pow(BASE, patternLength - 1) * oldChar % PRIME) * BASE + newChar % PRIME;
        if (textHash < 0) textHash += PRIME;
    }

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash && pattern === text.substring(i, i + patternLength)) {
            return i;
        }
        if (i < textLength - patternLength) {
            rehash(text, i, i + patternLength);
        }
    }
    return -1;
}

// Example usage
const text = "ABABCABABCDABABCABAB";
const pattern = "ABABCABAB";
const index = rabinKarpSearch(pattern, text);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
