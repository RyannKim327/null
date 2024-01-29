function rabinKarp(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const prime = 101;

    if (patternLength > textLength) {
        return -1;
    }

    function hash(str, length) {
        let hashValue = 0;
        for (let i = 0; i < length; i++) {
            hashValue += str.charCodeAt(i) * Math.pow(prime, i);
        }
        return hashValue;
    }

    function rehash(oldHash, oldChar, newChar, patternLength) {
        return (oldHash - oldChar.charCodeAt(0)) / prime + newChar.charCodeAt(0) * Math.pow(prime, patternLength - 1);
    }

    const patternHash = hash(pattern, patternLength);
    let textHash = hash(text, patternLength);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash && text.substring(i, i + patternLength) === pattern) {
            return i; // Pattern found at index i
        }
        if (i < textLength - patternLength) {
            textHash = rehash(textHash, text[i], text[i + patternLength], patternLength);
        }
    }

    return -1;
}
const text = "This is a sample text";
const pattern = "sample";

const result = rabinKarp(text, pattern);
console.log(result); // Output: 10
