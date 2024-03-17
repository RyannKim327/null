function rabinKarpSearch(text, pattern) {
    const prime = 101; // Choose a prime number to minimize hash collisions
    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = generateHash(pattern, patternLength);
    let textHash = generateHash(text, patternLength);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash && text.substring(i, i + patternLength) === pattern) {
            return i;
        }

        if (i < textLength - patternLength) {
            textHash = recalculateHash(text, i, patternLength, textHash, prime);
        }
    }

    return -1;
}

function generateHash(str, length) {
    let hash = 0;
    for (let i = 0; i < length; i++) {
        hash += str.charCodeAt(i) * Math.pow(101, i);
    }
    return hash;
}

function recalculateHash(str, oldIndex, patternLength, oldHash, prime) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / prime;
    newHash += str.charCodeAt(oldIndex + patternLength) * Math.pow(101, patternLength - 1);
    return newHash;
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "consectetur";

const index = rabinKarpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
