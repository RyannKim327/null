function KMPSearch(pattern, text) {
    if (pattern.length === 0) {
        return 0; // Pattern is empty, return 0
    }
    
    // Step 1: Compute the prefix function
    let lps = computeLPSArray(pattern);
    
    // Step 2: Search for the pattern in the text using the KMP algorithm
    let i = 0; // Index for text[]
    let j = 0; // Index for pattern[]
    
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) {
            return i - j; // Pattern found
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Skip matching characters using LPS
            } else {
                i++;
            }
        }
    }
    
    return -1; // Pattern not found
}

function computeLPSArray(pattern) {
    let len = 0; // Length of the previous longest prefix suffix
    let lps = [0]; // Array to store the LPS values
    
    for (let i = 1; i < pattern.length; i++) {
        while (len > 0 && pattern[len] !== pattern[i]) {
            len = lps[len - 1];
        }
        
        if (pattern[len] === pattern[i]) {
            len++;
        }
        
        lps[i] = len;
    }

    return lps;
}

// Test the KMPSearch function
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let index = KMPSearch(pattern, text);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
