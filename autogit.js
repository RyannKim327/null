function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}

function rabinKarpSearch(text, pattern) {
    const patternHash = hashString(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;

    for (let i = 0; i <= textLength - patternLength; i++) {
        const substring = text.substr(i, patternLength);
        const substringHash = hashString(substring);

        if (patternHash === substringHash && pattern === substring) {
            return i; // Return the index of the match
        }
    }

    return -1; // Return -1 if no match is found
}

// Example usage
const text = "hello world";
const pattern = "world";
const result = rabinKarpSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log(`Pattern not found`);
}
