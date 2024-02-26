function rabinKarp(text, pattern) {
    const BASE = 26;
    const MOD = 101;
    
    function hash(str) {
        let hashValue = 0;
        for (let i = 0; i < str.length; i++) {
            hashValue = (hashValue * BASE + str.charCodeAt(i)) % MOD;
        }
        return hashValue;
    }
    
    function rehash(oldHash, oldChar, newChar, patternLength) {
        let newHash = (oldHash - oldChar * Math.pow(BASE, patternLength - 1)) * BASE + newChar;
        return (newHash % MOD + MOD) % MOD;
    }
    
    let textHash = hash(text.substring(0, pattern.length));
    let patternHash = hash(pattern);
    
    for (let i = 0; i <= text.length - pattern.length; i++) {
        if (textHash === patternHash) {
            let match = true;
            for (let j = 0; j < pattern.length; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i;
            }
        }
        
        if (i < text.length - pattern.length) {
            textHash = rehash(textHash, text.charCodeAt(i), text.charCodeAt(i + pattern.length), pattern.length);
        }
    }
    
    return -1;
}

// Test the function
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";
const index = rabinKarp(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
