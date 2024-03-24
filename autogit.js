function rabinKarpSearch(text, pattern) {
    const prime = 101; // A prime number to use in the hashing function
    const patternLength = pattern.length;
    const textLength = text.length;
    
    let patternHash = 0;
    let textHash = 0;
    let base = 1;
    let foundIndexes = [];
    
    // Calculate the base value to be used in the hashing function
    for (let i = 0; i < patternLength - 1; i++) {
        base = (base * 256) % prime;
    }

    // Calculate the hash values for the pattern and the initial window of the text
    for (let i = 0; i < patternLength; i++) {
        patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (256 * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the window of the text and compare the hash values
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
            let j;
            for (j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }

            if (j === patternLength) {
                foundIndexes.push(i);
            }
        }

        // Calculate the hash value for the next window of the text
        if (i < textLength - patternLength) {
            textHash = (256 * (textHash - text.charCodeAt(i) * base) + text.charCodeAt(i + patternLength)) % prime;
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return foundIndexes;
}

// Example usage
const text = "ABABCABABCDABCABCDABCDABDE";
const pattern = "ABCD";

const indexes = rabinKarpSearch(text, pattern);
console.log("Found at indexes:", indexes);
