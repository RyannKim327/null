function rabinKarp(text, pattern) {
    const prime = 101; // A prime number to use in the hashing function
    const numChars = 256; // Assuming ASCII character set

    const textLength = text.length;
    const patternLength = pattern.length; 

    // Calculate the (numChars ^ patternLength) % prime
    let h = 1;
    for (let i = 0; i < patternLength - 1; i++) {
        h = (h * numChars) % prime;
    }

    // Calculate hash value for pattern and the first window of text
    let patternHash = 0;
    let textHash = 0;
    for (let i = 0; i < patternLength; i++) {
        patternHash = (numChars * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (numChars * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over the text and compare hashes
    for (let i = 0; i <= textLength - patternLength; i++) {
        if (patternHash === textHash) {
            // Check character by character if pattern matches the text substring
            let match = true;
            for (let j = 0; j < patternLength; j++) {
                if (pattern[j] !== text[i + j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                console.log("Pattern found at index: ", i);
            }
        }

        if (i < textLength - patternLength) {
            textHash = (numChars * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + patternLength)) % prime;
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }
}

// Test the function
const text = "AABAACAADAABAABA";
const pattern = "AABA";
rabinKarp(text, pattern);
