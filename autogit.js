function search(pattern, text) {
    const prime = 101;
    const patternLength = pattern.length;
    const textLength = text.length;
    const primePower = Math.pow(prime, patternLength - 1);
    const patternHash = hash(pattern);
    let textHash = hash(text.substring(0, patternLength));

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash && text.substring(i, i + patternLength) === pattern) {
            return i;
        }
        textHash = recalculateHash(text, i, patternLength, textHash, primePower);
    }
    return -1;
}

function hash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
}

function recalculateHash(text, oldIndex, patternLength, oldHash, primePower) {
    let newHash = oldHash - text.charCodeAt(oldIndex);
    newHash = newHash / prime;
    newHash += text.charCodeAt(oldIndex + patternLength) * primePower;
    return newHash;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const index = search(pattern, text);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in the text.");
}
