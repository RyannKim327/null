function rabinKarp(text, pattern) {
    const prime = 101; // Prime number for hashing
    const textSize = text.length;
    const patternSize = pattern.length;
    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * prime + str.charCodeAt(i)) % prime;
        }
        return hash;
    };

    const textHash = hashCode(text.substr(0, patternSize));
    const patternHash = hashCode(pattern);
    
    for (let i = 0; i <= textSize - patternSize; i++) {
        if (textHash === patternHash) {
            let found = true;
            for (let j = 0; j < patternSize; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i; // Pattern found at index i
            }
        }
        if (i < textSize - patternSize) {
            textHash = (textHash - text.charCodeAt(i) + text.charCodeAt(i + patternSize)) % prime;
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return -1; // Pattern not found in text
}

// Example usage
const text = "ABACADABRAC";
const pattern = "ABRA";
const foundIndex = rabinKarp(text, pattern);
if (foundIndex !== -1) {
    console.log(`Pattern found at index ${foundIndex}.`);
} else {
    console.log("Pattern not found in text.");
}
