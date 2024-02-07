function rabinKarpSearch(pattern, text) {
    // implementation goes here
}
function calculateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}

let patternHash = calculateHash(pattern);
let textHash = calculateHash(text.substr(0, pattern.length));
for (let i = 0; i <= text.length - pattern.length; i++) {
    if (patternHash === textHash) {
        let found = true;
        // compare characters to verify if the pattern matches the substring
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i; // pattern found at index i in the text
        }
    }
    // update the hash value
    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + pattern.length);
}
return -1;
function rabinKarpSearch(pattern, text) {
    function calculateHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash;
    }

    let patternHash = calculateHash(pattern);
    let textHash = calculateHash(text.substr(0, pattern.length));

    for (let i = 0; i <= text.length - pattern.length; i++) {
        if (patternHash === textHash) {
            let found = true;
            for (let j = 0; j < pattern.length; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
        textHash -= text.charCodeAt(i);
        textHash += text.charCodeAt(i + pattern.length);
    }

    return -1;
}
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let pattern = "sit";
let index = rabinKarpSearch(pattern, text);
console.log(index); // Output: 19
