function kmpSearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    
    let i = 0; // index for text
    let j = 0; // index for pattern
    
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        // Pattern found
        if (j === pattern.length) {
            result.push(i - j); // Store the index of the pattern in text
            j = lps[j - 1]; // Look for the next match
        } 
        // Mismatch after j matches
        else if (i < text.length && pattern[j] !== text[i]) {
            // Do not match lps[0..lps[j-1]] characters, they will match anyway
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return result;
}

function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // length of previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            // mismatch after length matches
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
const matches = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
